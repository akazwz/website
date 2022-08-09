import { Text, Box } from '@chakra-ui/react'

import { NextChakraLink } from './NextChakraLink'
import { Project } from '../src/types'

export const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<Box
			w={'100%'}
			p={7}
			borderWidth={1}
			rounded={'lg'}
			mb={3}
		>
			<NextChakraLink href={`/projects/${project.uuid}`}>
				<Text>{project.name}</Text>
			</NextChakraLink>
		</Box>
	)
}

export const ProjectCardAdmin = ({ project }: { project: Project }) => {
	return (
		<Box
			w={'100%'}
			p={7}
			borderWidth={1}
			rounded={'lg'}
			mb={3}
		>
			<NextChakraLink href={`/dashboard/projects/${project.uuid}`}>
				<Text>{project.name}</Text>
			</NextChakraLink>
		</Box>
	)
}

