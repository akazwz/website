import { Box, Button, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { marked } from 'marked'
import dayjs from 'dayjs'

import { DeleteProjectApi, GetProjectApi } from '../../../src/api'
import { Post, Project } from '../../../src/types'
import { useSWRConfig } from 'swr'
import { useAuth } from '../../../src/hooks/useAuth'

export const getServerSideProps: GetServerSideProps = async({ params }) => {
	const pid = params!.pid
	if (!pid || typeof pid !== 'string') {
		return {
			notFound: true,
		}
	}
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
}

const ProjectDetail = ({ project }: { project: Project }) => {
	const { mutate } = useSWRConfig()
	const { bearerToken } = useAuth()
	const router = useRouter()
	const handleDeleteProject = async() => {
		await DeleteProjectApi(project.uuid, bearerToken)
		await mutate('get-projects')
		await router.push('/dashboard/projects')
	}
	return (
		<Box maxW={{ base: 'xl', md: '3xl' }} mx="auto">
			<Heading mb={3}>{project.name}</Heading>
			<HStack mb={7} color="gray.500">
				<Text>{dayjs(project.created_at).format('YYYY/MM/DD HH:mm')}</Text>
			</HStack>

			<Box dangerouslySetInnerHTML={{ __html: marked(project.readme || '') }} />
			<HStack mt={12}>
				<Spacer />
				<Button colorScheme="red" onClick={handleDeleteProject}>Delete</Button>
			</HStack>
		</Box>
	)
}

export default ProjectDetail