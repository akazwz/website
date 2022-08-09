import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'

import { Project } from '../../src/types'
import { GetProjectApi } from '../../src/api'
import { ProjectPreview } from '../../components/ProjectPreview'

export const getServerSideProps: GetServerSideProps = async({ params }) => {
	const pid = params!.pid
	if (!pid || typeof pid !== 'string') {
		return {
			notFound: true,
		}
	}
	try {
		const response = await GetProjectApi(pid)
		const json = response.data
		const { data: project } = json
		if (!project) {
			return {
				notFound: true,
			}
		}
		return {
			props: {
				project,
			}
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

const ProjectDetail = ({ project }: { project: Project }) => {
	return (
		<Box>
			<ProjectPreview project={project} />
		</Box>
	)
}

export default ProjectDetail