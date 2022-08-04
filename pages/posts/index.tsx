import { PostCard } from '../../components/PostCard'
import { usePost } from '../../src/hooks/usePost'

const Projects = () => {
	const { posts } = usePost()
	return (
		<>
			{
				posts.map((post) => <PostCard key={post.uuid} post={post} />)
			}
		</>
	)
}

export default Projects