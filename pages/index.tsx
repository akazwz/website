import { Box, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'

import { NextChakraLink } from '../components/NextChakraLink'
import PostCard from '../components/PostCard'

const Index = () => {
	return (
		<Box>
			<Stack alignItems={{ md: 'center' }} spacing={7} direction={{ base: 'column', md: 'row-reverse' }}>
				<Image
					src={'https://avatars.githubusercontent.com/u/50396286?v=4'}
					rounded={'full'}
					draggable={false}
					boxSize={'100px'}
					alt={'profile'}
					align={'start'}
				/>
				<VStack align={'start'} fontSize={'lg'}>
					<Heading>
						Zhao Wenzhuo
					</Heading>
					<VStack align={'start'}>
						<Text>Open source lover, {' '}
							<NextChakraLink href={'https://github.com/akazwz'} color={'blue.500'}>
								akazwz
							</NextChakraLink>
						</Text>
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
			<Box mt={3}>
				<Heading fontWeight={'normal'} mb={3}>Latest Posts</Heading>
				<PostCard />
				<PostCard />
				<PostCard />
			</Box>
		</Box>
	)
}

export default Index