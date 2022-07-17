import { VStack } from '@chakra-ui/react'
import ProjectCard from '../components/ProjectCard'
import { ApiApp, Bookmark, ScreenshotOne } from '@icon-park/react'

const Projects = () => {
	return (
		<VStack spacing={3}>
			<ProjectCard
				icon={<ApiApp size={'37px'} />}
				name={'url-shorter'}
				description={'a simple url shortener build with Next,js'}
				link={'https://dlj.sh'}
				github={'https://github.com/akazwz/url-shorter'}
			/>
			<ProjectCard
				icon={<ScreenshotOne size={'37px'} />}
				name={'screenshot-api'}
				description={'a website screenshot api build with gin and chromedp'}
				link={'https://screenshot.hellozwz.com'}
				github={'https://github.com/akazwz/screenshot-api'}
			/>
			<ProjectCard
				icon={<Bookmark size={'37px'} />}
				name={'start-page'}
				description={'a start page for browsers build with Next.js'}
				link={'https://start-page-zwz.vercel.app'}
				github={'https://github.com/akazwz/start-page'}
			/>
		</VStack>
	)
}

export default Projects