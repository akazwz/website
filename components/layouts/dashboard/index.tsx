import { ReactNode } from 'react'
import { useRecoilState } from 'recoil'
import {
	Box,
	VStack,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	HStack,
	useColorModeValue,
	useDisclosure,
	Drawer, Center, Spinner, useToast,
} from '@chakra-ui/react'

import DashboardHeader from './Header'
import DashboardSidebar, { NavLinks, } from './Sidebar'
import { LanguagesSwitch } from '../../LanguagesSwitch'
import { ColorModeToggle } from '../../ColorModeToggle'
import { isMiniState } from '../../../src/state'
import { useAuth } from '../../../src/hooks/useAuth'
import { useRouter } from 'next/router'
import { useAccount } from '../../../src/hooks/useAccount'

interface IProps{
	children: ReactNode;
}

export const DashboardLayout = ({ children }: IProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const drawerBgColor = useColorModeValue('white', 'black')
	const [mini, setMini] = useRecoilState(isMiniState)

	const router = useRouter()
	const toast = useToast()
	const { loading, error } = useAuth()

	if (loading) {
		return <Center h="70vh"><Spinner /></Center>
	}

	if (error) {
		toast({
			title: 'Need Auth',
			position: 'top',
			status: 'info',
		})
		router.push('/login').then()
		return <Center h="70vh"><Spinner /></Center>
	}

	return (
		<Box minH="100vh">
			<DashboardSidebar
				onClose={onClose}
				mini={mini}
				setMini={setMini}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				isOpen={isOpen}
				onClose={onClose}
				size={'full'}
				placement={'left'}
			>
				<DrawerContent backgroundColor={drawerBgColor}>
					<DrawerHeader>
						<DrawerCloseButton />
					</DrawerHeader>
					<DrawerBody>
						<VStack>
							<HStack>
								<LanguagesSwitch />
								<ColorModeToggle />
							</HStack>
							<NavLinks mini={false} />
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			<DashboardHeader
				onOpen={onOpen}
				mini={mini}
				height={'6vh'}
			/>
			<Box as="main" ml={{ base: 0, md: mini ? 20 : 60 }} p={3}>
				{children}
			</Box>
		</Box>
	)
}
