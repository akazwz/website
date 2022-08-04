import { Box, Button, HStack, Spacer, Stack, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { Post } from '../src/types'
import { NextChakraLink } from './NextChakraLink'
import { DeletePostApi } from '../src/api'
import { useAuth } from '../src/hooks/useAuth'

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

export const PostCardAdmin = ({ post }: { post: Post }) => {
	const { bearerToken } = useAuth()
	const handleDeletePost = async() => {
		await DeletePostApi(post.uuid, bearerToken)
	}
	return (
		<Stack
			direction={{ base: 'column', md: 'row' }}
			borderWidth={1}
			mb={3}
			rounded="lg"
			p={7}
		>
			<NextChakraLink href={`/dashboard/posts/${post.uuid}`}>
				<Box>
					<Text fontWeight="bold" fontSize="lg">{post.title}</Text>
					<Text>{dayjs(post.created_at).format('YYYY/MM/DD HH:mm')}</Text>
				</Box>
			</NextChakraLink>
			<Spacer />
			<HStack justify="space-around" rounded="lg" borderWidth={1} p={3}>
				<Button colorScheme="blue">Edit</Button>
				<Button colorScheme="red" onClick={handleDeletePost}>Delete</Button>
			</HStack>
		</Stack>
	)
}

