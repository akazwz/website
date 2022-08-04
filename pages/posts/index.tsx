import { Box, VStack, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'

import { Post } from '../../src/types'
import { PostCard } from '../../components/PostCard'
import { getPosts } from '../../src/api'

export const getServerSideProps: GetServerSideProps = async() => {
	const response = await getPosts()
	const json = await response.json()
	const { data: posts } = json
	return {
		props: {
			posts,
		}
	}
}

const Projects = ({ posts }: { posts: Post[] }) => {
	return (
		<>
			{
				posts.map((post)=><PostCard key={post.uuid} post={post} />)
			}
		</>
	)
}

export default Projects