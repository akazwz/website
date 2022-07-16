import { Box, HStack, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { NextChakraLink } from '../NextChakraLink'
import { Logo } from '../Logo'

const Header = () => {
	const router = useRouter()
	return (
		<Box
			as="header"
			mx="auto"
			maxW="7xl"
			py="3"
			px={{ base: '4', md: '8' }}
		>
			<HStack>
				<NextChakraLink href={'/'} color={router.pathname === '/' ? 'yellow.300' : ''}>
					<Logo size="37px" />
				</NextChakraLink>
				<Spacer />
				<Links />
			</HStack>
		</Box>
	)
}

const Links = () => {
	return (
		<HStack fontWeight={'bold'} spacing={3}>
			<NextChakraLink href={'/about'}>
				About
			</NextChakraLink>
			<NextChakraLink href={'/projects'}>
				Projects
			</NextChakraLink>
		</HStack>
	)
}

export default Header