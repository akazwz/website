import { GetServerSideProps, GetStaticProps } from 'next'

import { GetProjectsApi } from '../../src/api'
import { Project } from '../../src/types'
import { ProjectCard } from '../../components/ProjectCard'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getServerSideProps: GetServerSideProps = async({locale}) => {
	try {
		const response = await GetProjectsApi()
		const json = response.data
		const { data: projects } = json
		return {
			props: {
				projects,
				...(await serverSideTranslations(locale || 'en', ['common'])),
			}
		}
	} catch (e) {
		return {
			props: {
				projects: [],
				...(await serverSideTranslations(locale || 'en', ['common'])),
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