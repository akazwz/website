import { Box, Button, HStack, Spacer, } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { NextChakraLink } from '../NextChakraLink'
import { Logo } from '../Logo'
import { ColorModeToggle } from '../ColorModeToggle'

const Header = () => {
	// const bg = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
	const router = useRouter()

	return (
		<Box
			as="header"
			position="sticky"
			rounded="lg"
			p={3}
			mx="auto"
			maxW="3xl"
		>
			<HStack
				rounded="lg"
				justify="space-between"
				backdropFilter={'blur(5px)'}
			>
				<NextChakraLink href={'/'} color={router.pathname === '/' ? 'purple.500' : ''}>
					<Box aria-label={'home'}>
						<Logo size="37px" />
					</Box>
				</NextChakraLink>
				<Spacer />
				<Links />
				<ColorModeToggle />
			</HStack>
		</Box>
	)
}

const Links = () => {
	const router = useRouter()
	return (
		<HStack
			as="nav"
			fontWeight={'bold'}
		>
			<NextChakraLink href={'/about'}>
				<Button variant={router.pathname.startsWith('/about') ? 'solid' : 'ghost'}>
					About
				</Button>
			</NextChakraLink>
			<NextChakraLink href={'/projects'}>
				<Button variant={router.pathname.startsWith('/projects') ? 'solid' : 'ghost'}>
					Projects
				</Button>
			</NextChakraLink>
			<NextChakraLink href={'/posts'}>
				<Button variant={router.pathname.startsWith('/posts') ? 'solid' : 'ghost'}>
					Posts
				</Button>
			</NextChakraLink>
		</HStack>
	)
}

export default Header