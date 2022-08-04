import { Box, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { Post } from '../src/types'
import { NextChakraLink } from './NextChakraLink'

export const PostCard = ({ post }: { post: Post }) => {
	return (
		<NextChakraLink href={`/posts/${post.uuid}`}>
			<Box p={7} borderWidth={1} mb={3} rounded="lg">
				<Text fontWeight="bold" fontSize="lg">{post.title}</Text>
				<Text>{dayjs(post.created_at).format('YYYY/MM/DD HH:mm')}</Text>
			</Box>
		</NextChakraLink>
	)
}