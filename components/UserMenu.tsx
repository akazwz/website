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
	useColorModeValue,
} from '@chakra-ui/react'

import { useRouter } from 'next/router'

export const UserMenu = () => {
	const bgColor = useColorModeValue('white', 'black')

	const router = useRouter()

	return (
		<Box>
			<Menu>
				<MenuButton as={Box} variant={'ghost'}>
					<Avatar src={''} size="sm" />
				</MenuButton>
				<MenuList backgroundColor={bgColor}>
					<VStack justifyContent="center" p={3} spacing={3}>
						<HStack>
							<Text>{'akazwz@pm.me'}</Text>
						</HStack>
						<Divider />
						<HStack>
							<Text>{'admin'}</Text>
						</HStack>
					</VStack>
				</MenuList>
			</Menu>
		</Box>
	)
}
