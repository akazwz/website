import { useProject } from '../../../src/hooks/useProject'
import { PostCardAdmin } from '../../../components/PostCard'
import { ProjectCardAdmin } from '../../../components/ProjectCard'

const Posts = () => {
	const { projects } = useProject()
	return (
		<>
			{
				projects && projects.length > 0 && projects.map((project) =>
					<ProjectCardAdmin key={project.uuid} project={project} />)
			}
		</>
	)
}

export default Posts