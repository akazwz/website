import { GetServerSideProps } from 'next'

import { GetProjectsApi } from '../../src/api'
import { Project } from '../../src/types'
import { ProjectCard } from '../../components/ProjectCard'

export const getServerSideProps: GetServerSideProps = async() => {
	try {
		const response = await GetProjectsApi()
		const json = response.data
		const { data: projects } = json
		return {
			props: {
				projects,
			}
		}
	} catch (e) {
		return {
			props: {
				projects: [],
			}
		}
	}
}

const Posts = ({ projects }: { projects: Project[] }) => {
	return (
		<>
			{
				projects && projects.length > 0 && projects.map((project) =>
					<ProjectCard key={project.uid} project={project} />)
			}
		</>
	)
}

export default Posts