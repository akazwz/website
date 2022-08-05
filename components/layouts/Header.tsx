import {
	Box,
	Button,
	Drawer, DrawerBody, DrawerCloseButton,
	DrawerContent, DrawerHeader,
	DrawerOverlay, Heading,
	HStack,
	IconButton,
	Spacer, useColorModeValue,
	useDisclosure, VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { HamburgerButton } from '@icon-park/react'

import { NextChakraLink } from '../NextChakraLink'
import { Logo } from '../Logo'
import { ColorModeToggle } from '../ColorModeToggle'

const MobileLinks = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const bgColor = useColorModeValue('white', 'black')
	const router = useRouter()

	return (
		<Box display={{ base: 'block', md: 'none' }}>
			<IconButton
				aria-label={'nav menu'}
				icon={<HamburgerButton size="21px" />} variant="ghost"
				onClick={onOpen}
			/>
			<Drawer
				placement="left"
				size="xl"
				isOpen={isOpen}
				onClose={onClose}
			>
				<DrawerContent bgColor={bgColor} p={7}>
					<DrawerHeader>
						<DrawerCloseButton />
					</DrawerHeader>
					<DrawerBody>
						<VStack spacing={24} fontSize="lg" fontWeight="bold" justifyContent="center" height="50vh">
							<NextChakraLink href={'/about'}>
								About
							</NextChakraLink>
							<NextChakraLink href={'/projects'}>
								Projects
							</NextChakraLink>
							<NextChakraLink href={'/posts'}>
								Posts
							</NextChakraLink>
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	)
}

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
						<Logo size="30px" />
					</Box>
				</NextChakraLink>
				<Spacer />
				<Links />
				<MobileLinks />
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
			display={{ base: 'none', md: 'flex' }}
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