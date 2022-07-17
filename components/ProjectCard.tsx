import { Stack, HStack, IconButton, Spacer, Text, VStack, Icon } from '@chakra-ui/react'
import { Github, Link as LinkIcon } from '@icon-park/react'
import { ReactNode } from 'react'
import { NextChakraLink } from './NextChakraLink'

interface ProjectProps{
	icon: ReactNode,
	name: string
	description: string
	link: string
	github: string
}

const ProjectCard = ({ icon, name, description, link, github }: ProjectProps) => {
	return (
		<Stack
			w={'100%'}
			p={3}
			borderWidth={1}
			rounded={'lg'}
			direction={{ base: 'column', md: 'row' }}
		>
			<HStack spacing={3}>
				{icon}
				<VStack align={'start'}>
					<Text>{name}</Text>
					<Text
						fontWeight={'light'}
						fontSize={'sm'}
						color={'gray.500'}
					>
						{description}
					</Text>
				</VStack>
			</HStack>
			<Spacer />
			<HStack>
				<NextChakraLink href={link} isExternal w={'full'}>
					<IconButton
						variant={'ghost'}
						borderWidth={1}
						aria-label={''}
						icon={<LinkIcon />}
						w={'full'}
					/>
				</NextChakraLink>
				<NextChakraLink href={github} isExternal w={'full'}>
					<IconButton
						variant={'ghost'}
						borderWidth={1}
						aria-label={''}
						icon={<Github />}
						w={'full'}
					/>
				</NextChakraLink>
			</HStack>
		</Stack>
	)
}

export default ProjectCard