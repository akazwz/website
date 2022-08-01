import { Container, HStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useSound from 'use-sound'
import { NextChakraLink } from '../../components/NextChakraLink'
import { Logo } from '../../components/Logo'

export const Header = () => {
	const router = useRouter()
	const [playPing] = useSound('/sounds/light_switch.mp3', {
		volume: 0.25,
	})

	return (
		<Container
			as="header"
			zIndex="10"
			position={{ base: 'static', md: 'sticky' }}
			my={{ base: 4, md: 6 }}
			top={{ base: 4, md: 6 }}
			maxW="container.lg"
		>
			<HStack
				rounded="lg"
				py={2}
				px={4}
				bgColor="glass.50"
				justify="space-between"
				backdropFilter="saturate(150%) blur(25px)"
			>
				<NextChakraLink href="/">
					<Logo size={'37px'} />
				</NextChakraLink>
			</HStack>
		</Container>
	)
}