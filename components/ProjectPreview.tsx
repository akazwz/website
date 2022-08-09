import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Github, WebPage } from '@icon-park/react'
import dayjs from 'dayjs'
import { marked } from 'marked'

import { NextChakraLink } from './NextChakraLink'
import { Project } from '../src/types'

export const ProjectPreview = ({ project }: { project: Project }) => {
	return (
		<Box>
			<Heading mb={3}>{project.name}</Heading>
			<Text mb={3}>{project.about}</Text>
			{
				project.website && (
					<HStack>
						<WebPage />
						<NextChakraLink href={project.website} color="blue.500">
							{project!.website}
						</NextChakraLink>
					</HStack>
				)
			}
			{
				project.repo && (
					<HStack>
						<Github />
						<NextChakraLink href={project!.repo || ''} color="blue.500">
							{project!.repo}
						</NextChakraLink>
					</HStack>
				)
			}
			<HStack mb={7} mt={3} color="gray.500">
				<Text>{dayjs(project.created_at).format('YYYY/MM')}</Text>
			</HStack>
			{
				project.preview && project.preview?.length > 0 && <Image alt={project.name} src={project.preview} mb={7} />
			}
			<Box dangerouslySetInnerHTML={{ __html: marked(project.readme || '') }} />
		</Box>
	)
}
