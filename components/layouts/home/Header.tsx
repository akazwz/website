import { useRef } from 'react'
import {
	Box,
	Button,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	HStack,
	IconButton,
	Spacer,
	VStack,
	useColorModeValue,
	useDisclosure,
	useOutsideClick,
	Drawer,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { HamburgerButton } from '@icon-park/react'
import { useTranslation } from 'next-i18next'

import { NextChakraLink } from '../../NextChakraLink'
import { Logo } from '../../Logo'
import { ColorModeToggle } from '../../ColorModeToggle'

const MobileLinks = () => {
	const ref = useRef(null)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const bgColor = useColorModeValue('white', 'black')

	useOutsideClick({
		ref: ref,
		handler: () => onClose()
	})

	return (
		<Box display={{ base: 'block', md: 'none' }}>
			<IconButton
				ref={ref}
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

const HomeHeader = () => {
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
						<Logo size="21px" />
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

	const { t } = useTranslation('common')
	return (
		<HStack
			as="nav"
			fontWeight={'bold'}
			display={{ base: 'none', md: 'flex' }}
		>
			<NextChakraLink href={'/about'}>
				<Button variant={router.pathname.startsWith('/about') ? 'solid' : 'ghost'}>
					{t('header.about')}
				</Button>
			</NextChakraLink>
			<NextChakraLink href={'/projects'}>
				<Button variant={router.pathname.startsWith('/projects') ? 'solid' : 'ghost'}>
					{t('header.projects')}
				</Button>
			</NextChakraLink>
			<NextChakraLink href={'/posts'}>
				<Button variant={router.pathname.startsWith('/posts') ? 'solid' : 'ghost'}>
					{t('header.posts')}
				</Button>
			</NextChakraLink>
		</HStack>
	)
}

export default HomeHeader