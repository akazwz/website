import { useEffect, useState } from 'react'
import useSWR from 'swr'

import { GetProjectsApi } from '../api'
import { Project } from '../types'

export const useProject = () => {
	const [projects, setProjects] = useState<Project[]>([])
	const { data } = useSWR('get-projects', GetProjectsApi)

	useEffect(() => {
		if (data?.data) {
			const { data: serverData } = data.data
			setProjects(serverData)
		}
	}, [data?.data])

	return {
		projects,
	}
}