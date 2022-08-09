import { Text, HStack, VStack, Spacer, Stack, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { useSWRConfig } from 'swr'

import { NextChakraLink } from './NextChakraLink'
import { Project } from '../src/types'
import { useAuth } from '../src/hooks/useAuth'
import { DeleteProjectApi } from '../src/api'

export const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<NextChakraLink href={`/projects/${project.uuid}`}>
			<HStack p={7} borderWidth={1} mb={3} rounded="lg">
				<VStack>
					<Text fontWeight="bold" fontSize="lg">{project.name.toUpperCase()}</Text>
				</VStack>
				<Spacer />
				<Text color="gray.500">{dayjs(project.created_at).format('YYYY/MM')}</Text>
			</HStack>
		</NextChakraLink>
	)
}

export const ProjectCardAdmin = ({ project }: { project: Project }) => {
	const { mutate } = useSWRConfig()
	const { bearerToken } = useAuth()
	const router = useRouter()
	const handleDeleteProject = async() => {
		await DeleteProjectApi(project.uuid, bearerToken)
		await mutate('get-projects')
		await router.push('/dashboard/projects')
	}
	return (
		<Stack
			direction={{ base: 'column', md: 'row' }}
			borderWidth={1}
			mb={3}
			rounded="lg"
			p={{ base: 3, md: 7 }}
			alignItems="center"
		>
			<NextChakraLink href={`/dashboard/projects/${project.uuid}`}>
				<Text fontWeight="bold" fontSize="lg">{project.name}</Text>
				<Text color="gray.500">{dayjs(project.created_at).format('YYYY/MM')}</Text>
			</NextChakraLink>
			<Spacer />
			<HStack justify="space-around" rounded="lg" borderWidth={1} p={3}>
				<Button colorScheme="blue">Edit</Button>
				<Button colorScheme="red" onClick={handleDeleteProject}>Delete</Button>
			</HStack>
		</Stack>
	)
}

