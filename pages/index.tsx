import { Heading, Image, VStack } from '@chakra-ui/react'

const Index = () => {
	return (
		<VStack
			display={'flex'}
			minH={'70vh'}
			justifyContent={'center'}
			spacing={7}
		>
			<Image
				boxSize={'100px'}
				rounded={'full'}
				draggable={false}
				alt={'avatar'}
				src={'https://avatars.githubusercontent.com/u/50396286?v=4'}
			/>
			<VStack>
				<Heading>
					👋 I&apos;m AKAZWZ,
				</Heading>
				<Heading>
					a developer
				</Heading>
			</VStack>
		</VStack>
	)
}

export default Index