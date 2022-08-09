import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { marked } from 'marked'
import dayjs from 'dayjs'

import { Project } from '../../src/types'
import { GetProjectApi } from '../../src/api'

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
		const { data: post } = json
		if (!post) {
			return {
				notFound: true,
			}
		}
		return {
			props: {
				post,
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
			<Heading mb={3}>{project.name}</Heading>
			<HStack mb={7} color="gray.500">
				<Text>{dayjs(project.created_at).format('YYYY/MM/DD HH:mm')}</Text>
			</HStack>
			{
				project.preview && project.preview?.length > 0 && <Image alt={project.name} src={project.preview} mb={7} />
			}
			<Box dangerouslySetInnerHTML={{ __html: marked(project.readme || '') }} />
		</Box>
	)
}

export default ProjectDetail