import { Box, Button, Heading, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { marked } from 'marked'
import dayjs from 'dayjs'

import { DeleteProjectApi, GetProjectApi } from '../../../src/api'
import { Post, Project } from '../../../src/types'
import { useSWRConfig } from 'swr'
import { useAuth } from '../../../src/hooks/useAuth'
import { NextChakraLink } from '../../../components/NextChakraLink'
import { Github, WebPage } from '@icon-park/react'
import { ProjectPreview } from '../../../components/ProjectPreview'

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
		<Box maxW={{ base: 'xl', md: '3xl' }} mx="auto" p={{ base: 3, md: 7 }}>
			<ProjectPreview project={project} />
			<HStack mt={12}>
				<Spacer />
				<Button colorScheme="red" onClick={handleDeleteProject}>Delete</Button>
			</HStack>
		</Box>
	)
}

export default ProjectDetail