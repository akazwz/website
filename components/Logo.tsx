import { HStack, Text } from '@chakra-ui/react'

interface LogoProps{
	size: string
}

export const Logo = ({ size }: LogoProps) => {
	return (
		<HStack spacing={3} fontWeight="extrabold" fontSize={size}>
			<Text>
				AKAZWZ
			</Text>
		</HStack>
	)
}