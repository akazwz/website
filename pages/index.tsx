import { Box, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'

import { NextChakraLink } from '../components/NextChakraLink'

const Index = () => {
	return (
		<Box>
			<Stack alignItems={'center'} spacing={7} direction={{ base: 'column', md: 'row-reverse' }}>
				<Image
					src={'https://avatars.githubusercontent.com/u/50396286?v=4'}
					rounded={'full'}
					draggable={false}
					boxSize={'150px'}
					alt={'profile'}
				/>
				<VStack align={'start'} fontSize={'2xl'}>
					<Heading>
						Hey, I&apos;m AKAZWZ 👋
					</Heading>
					<VStack>
						<Text>
							I&apos;m a developer. Born and
							raised in China and now living in the Chengdu.
							I like code something and open source.
							Current coding with {' '}
							<NextChakraLink href="https://dlj.sh" color={'blue.500'}>
								dlj.sh
							</NextChakraLink>
							, a simple url shortener build with next.js.
						</Text>
					</VStack>
				</VStack>

			</Stack>
		</Box>
	)
}

export default Index