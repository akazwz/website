import { GetServerSideProps } from 'next'
import { getPosts } from '../../../src/api'
import { Post } from '../../../src/types'
import { PostCard, PostCardAdmin } from '../../../components/PostCard'

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

const Posts = ({ posts }: { posts: Post[] }) => {
	return (
		<>
			{
				posts.map((post) => <PostCardAdmin key={post.uuid} post={post} />)
			}
		</>
	)
}

export default Posts