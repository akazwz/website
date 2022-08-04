import { GetServerSideProps } from 'next'

import { GetPostsApi } from '../../../src/api'
import { Post } from '../../../src/types'
import { PostCardAdmin } from '../../../components/PostCard'

export const getServerSideProps: GetServerSideProps = async() => {
	const response = await GetPostsApi()
	const json = response.data
	const { data: posts } = json
	return {
		props: {
			posts,
		}
	}
}

const Posts = ({ posts }: { posts: Post[] }) => {
	return (
		<>
			{
				posts.map((post) => <PostCardAdmin key={post.uuid} post={post} />)
			}
		</>
	)
}

export default Posts