import {
	Avatar,
	Box,
	VStack,
	Menu,
	MenuButton,
	MenuList,
	HStack,
	Divider,
	Text,
	useColorModeValue, Button,
} from '@chakra-ui/react'

import { useAccount } from '../src/hooks/useAccount'
import { useAuth } from '../src/hooks/useAuth'
import { useRouter } from 'next/router'

export const UserMenu = () => {
	const bgColor = useColorModeValue('white', 'black')

	const router = useRouter()

	const { signOut } = useAuth()
	const { account } = useAccount()

	return (
		<Box>
			<Menu>
				<MenuButton as={Box} variant={'ghost'}>
					<Avatar src={''} size="sm" />
				</MenuButton>
				<MenuList backgroundColor={bgColor}>
					<VStack justifyContent="center" p={3} spacing={3}>
						<HStack>
							<Text>{account?.username}</Text>
						</HStack>
						<Divider />
						<HStack fontSize="small">
							<Text>{account?.uid}</Text>
						</HStack>
						<Divider />
						<HStack>
							<Button onClick={() => {
								signOut()
								router.push('/login').then()
							}}>Sign Out</Button>
						</HStack>
					</VStack>
				</MenuList>
			</Menu>
		</Box>
	)
}
