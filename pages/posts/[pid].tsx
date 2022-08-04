import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { marked } from 'marked'

import { Post } from '../../src/types'
import { getPost } from '../../src/api'

export const getServerSideProps: GetServerSideProps = async({ params }) => {
	const pid = params!.pid
	if (!pid || typeof pid !== 'string') {
		return {
			notFound: true,
		}
	}
	const response = await getPost(pid)
	const json = await response.json()
	const { data: post } = json
	return {
		props: {
			post,
		}
	}
}

const PostDetail = ({ post }: { post: Post }) => {
	return (
		<Box>
			<Heading mb={7}>{post.title}</Heading>
			<Image
				alt={post.title}
				src={post.cover}
				mb={7}
			/>
			<Box dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
		</Box>
	)
}

export default PostDetail