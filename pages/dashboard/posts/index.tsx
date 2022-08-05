import { PostCardAdmin } from '../../../components/PostCard'
import { usePost } from '../../../src/hooks/usePost'

const Posts = () => {
	const { posts } = usePost()
	return (
		<>
			{
				posts && posts.length > 0 && posts.map((post) => <PostCardAdmin key={post.uuid} post={post} />)
			}
		</>
	)
}

export default Posts