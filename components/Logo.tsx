import { Heading, HStack, Text } from '@chakra-ui/react'
import { Triangle } from '@icon-park/react'

interface LogoProps{
	size: string
}

export const Logo = ({ size }: LogoProps) => {
	return (
		<HStack spacing={3} fontWeight="bold">
			<Text>
				AKAZWZ
			</Text>
		</HStack>
	)
}