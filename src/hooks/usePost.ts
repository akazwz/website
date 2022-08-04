import { useEffect, useState } from 'react'
import useSWR from 'swr'

import { GetPostsApi } from '../api'
import { Post } from '../types'

export const usePost = () => {
	const [posts, setPosts] = useState<Post[]>([])
	const { data } = useSWR('get-posts', GetPostsApi)

	useEffect(() => {
		if (data?.data) {
			const { data: serverData } = data.data
			setPosts(serverData)
		}
	}, [data?.data])

	return {
		posts,
	}
}