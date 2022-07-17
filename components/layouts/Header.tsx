import { Box, Button, HStack, Spacer, useColorModeValue, } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { NextChakraLink } from '../NextChakraLink'
import { Logo } from '../Logo'

const Header = () => {
	const bg = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
	const router = useRouter()
	return (
		<Box
			as="header"
			position="fixed"
			w="100%"
			zIndex={99}
			borderBottomWidth="2px"
			bg={bg}
			backdropFilter={'blur(2px)'}
		>
			<Box maxW={'2xl'} mx={'auto'} px={3}>
				<HStack justify="space-between" w="100%" h={16}>
					<NextChakraLink href={'/'} color={router.pathname === '/' ? 'yellow.300' : ''}>
						<Logo size="37px" />
					</NextChakraLink>
					<Spacer />
					<Links />
				</HStack>
			</Box>
		</Box>
	)
}

const Links = () => {
	const router = useRouter()
	return (
		<HStack fontWeight={'bold'} spacing={3}>
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
		</HStack>
	)
}

export default Header