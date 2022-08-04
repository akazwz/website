import { Box, Button, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { marked } from 'marked'
import dayjs from 'dayjs'

import { GetPostApi } from '../../../src/api'
import { Post } from '../../../src/types'

export const getServerSideProps: GetServerSideProps = async({ params }) => {
	const pid = params!.pid
	if (!pid || typeof pid !== 'string') {
		return {
			notFound: true,
		}
	}
	const response = await GetPostApi(pid)
	const json = response.data
	const { data: post } = json
	if (!post) {
		return {
			notFound: true,
		}
	}
	return {
		props: {
			post,
		}
	}
}

const PostDetail = ({ post }: { post: Post }) => {
	return (
		<Box maxW={{ base: 'xl', md: '3xl' }} mx="auto">
			<Heading mb={3}>{post.title}</Heading>
			<HStack mb={7} color="gray.500">
				<Text>{dayjs(post.created_at).format('YYYY/MM/DD HH:mm')}</Text>
				<Text>• {post.viewed} views</Text>
			</HStack>
			<Image
				alt={post.title}
				src={post.cover}
				mb={7}
			/>
			<Box dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
			<HStack mt={12}>
				<Spacer />
				<Button colorScheme="red">Delete</Button>
			</HStack>
		</Box>
	)
}

export default PostDetail