import { GetServerSideProps } from 'next'

import { PostCard } from '../../components/PostCard'
import { GetPostsApi } from '../../src/api'
import { Post } from '../../src/types'

export const getServerSideProps: GetServerSideProps = async() => {
	try {
		const response = await GetPostsApi()
		const json = response.data
		const { data: posts } = json
		return {
			props: {
				posts,
			}
		}
	} catch (e) {
		return {
			props: {
				posts: [],
			}
		}
	}
}

const Posts = ({ posts }: { posts: Post[] }) => {
	return (
		<>
			{
				posts && posts.length > 0 && posts.map((post) => <PostCard key={post.uuid} post={post} />)
			}
		</>
	)
}

export default Posts