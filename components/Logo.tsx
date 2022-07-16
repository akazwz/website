import { HStack } from '@chakra-ui/react'
import { Triangle } from '@icon-park/react'

interface LogoProps{
	size: string
}

export const Logo = ({ size }: LogoProps) => {
	return (
		<HStack spacing={3}>
			<Triangle theme="filled" size={size} />
		</HStack>
	)
}