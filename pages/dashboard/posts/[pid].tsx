import { Box, Button, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { marked } from 'marked'
import dayjs from 'dayjs'

import { DeletePostApi, GetPostApi } from '../../../src/api'
import { Post } from '../../../src/types'
import { useSWRConfig } from 'swr'
import { useAuth } from '../../../src/hooks/useAuth'

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
	const { mutate } = useSWRConfig()
	const { bearerToken } = useAuth()
	const router = useRouter()
	const handleDeletePost = async() => {
		await DeletePostApi(post.uuid, bearerToken)
		await mutate('get-posts')
		await router.push('/dashboard/posts')
	}
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
				<Button colorScheme="red" onClick={handleDeletePost}>Delete</Button>
			</HStack>
		</Box>
	)
}

export default PostDetail