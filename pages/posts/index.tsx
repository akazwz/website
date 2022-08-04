import { GetServerSideProps } from 'next'

import { Post } from '../../src/types'
import { PostCard } from '../../components/PostCard'
import { GetPostsApi } from '../../src/api'

export const getServerSideProps: GetServerSideProps = async() => {
	const response = await GetPostsApi()
	const json = response.data
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
				posts.map((post) => <PostCard key={post.uuid} post={post} />)
			}
		</>
	)
}

export default Projects