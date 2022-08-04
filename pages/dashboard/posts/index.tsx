import { PostCardAdmin } from '../../../components/PostCard'
import { usePost } from '../../../src/hooks/usePost'
import { Button, HStack, Spacer } from '@chakra-ui/react'
import { NextChakraLink } from '../../../components/NextChakraLink'

const Posts = () => {
	const { posts } = usePost()
	return (
		<>
			{
				posts.map((post) => <PostCardAdmin key={post.uuid} post={post} />)
			}
		</>
	)
}

export default Posts