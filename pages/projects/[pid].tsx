import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'

import { Project } from '../../src/types'
import { GetProjectApi } from '../../src/api'
import { ProjectPreview } from '../../components/ProjectPreview'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getServerSideProps: GetServerSideProps = async({ params, locale }) => {
	const pid = params!.pid
	if (!pid || typeof pid !== 'string') {
		return {
			notFound: true,
			props: {
				...(await serverSideTranslations(locale || 'en', ['common'])),
			},
		}
	}
	try {
		const response = await GetProjectApi(pid)
		const json = response.data
		const { data: project } = json
		if (!project) {
			return {
				notFound: true,
				props: {
					...(await serverSideTranslations(locale || 'en', ['common'])),
				},
			}
		}
		return {
			props: {
				project,
				...(await serverSideTranslations(locale || 'en', ['common'])),
			}
		}
	} catch (e) {
		return {
			notFound: true,
			props: {
				...(await serverSideTranslations(locale || 'en', ['common'])),
			},
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