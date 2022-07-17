import { Box, Divider, HStack, Text, useColorModeValue } from '@chakra-ui/react'

const PostCard = () => {
	const bg = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
	return (
		<Box p={3} bg={bg} rounded={'lg'} my={3}>
			<Text fontSize={'lg'} fontWeight={'bold'}>Post Title</Text>
			<HStack color={'gray.600'}>
				<Text>
					2021/03/07
				</Text>
				<Divider orientation={'vertical'} />
				<Text>
					307 views
				</Text>
			</HStack>
			<Text mt={3}>
				Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser),
				transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?
			</Text>
		</Box>
	)
}

export default PostCard