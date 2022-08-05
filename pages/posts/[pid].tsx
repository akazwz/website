import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { marked } from 'marked'
import dayjs from 'dayjs'

import { Post } from '../../src/types'
import { GetPostApi } from '../../src/api'

export const getServerSideProps: GetServerSideProps = async({ params }) => {
	const pid = params!.pid
	if (!pid || typeof pid !== 'string') {
		return {
			notFound: true,
		}
	}
	try {
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
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

const PostDetail = ({ post }: { post: Post }) => {
	return (
		<>
			<Box>
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
				<pre dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
			</Box>
		</>
	)
}

export default PostDetail