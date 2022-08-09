import {
	Box,
	Button,
	Center,
	Heading,
	Input,
	Textarea,
	VStack,
	useToast,
} from '@chakra-ui/react'
import { useState, MouseEvent } from 'react'
import { marked } from 'marked'

import { ImageUploader } from '../../../components/ImageUploader'
import { useAuth } from '../../../src/hooks/useAuth'
import { CreateProjectApi } from '../../../src/api'

const NewProject = () => {
	const [name, setName] = useState('')
	const [about, setAbout] = useState('')
	const [website, setWebsite] = useState('')
	const [repo, setRepo] = useState('')
	const [preview, setPreview] = useState('')
	const [readme, setReadme] = useState('')

	const [loading, setLoading] = useState(false)

	const readmeHtml = marked(readme)

	const handleUrl = (url: string) => {
		setPreview(url)
	}

	const { bearerToken } = useAuth()
	const toast = useToast()

	const handleCreatePost = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		CreateProjectApi({ name, about, website, repo, preview, readme }, bearerToken)
			.then((res) => {
				setLoading(true)
				toast({
					title: 'Create Project Success',
					status: 'success',
					isClosable: true,
					position: 'top',
					duration: 3000,
				})
			})
			.catch((reason) => {
				toast({
					title: 'Create Project Error',
					status: 'error',
					isClosable: true,
					position: 'top',
					duration: 3000,
				})
			})
			.finally(() => {
				setLoading(false)
			})
	}

	return (
		<VStack maxW="3xl" mx="auto" as="form">
			<Heading mb={3}>New Project</Heading>
			<Input
				size="lg"
				placeholder="name"
				value={name}
				onInput={(e) => setName(e.currentTarget.value)}
			/>
			<Input
				size="lg"
				placeholder="about"
				value={about}
				onInput={(e) => setAbout(e.currentTarget.value)}
			/>
			<Input
				size="lg"
				placeholder="website"
				value={website}
				onInput={(e) => setWebsite(e.currentTarget.value)}
			/>
			<Input
				size="lg"
				placeholder="repo"
				value={repo}
				onInput={(e) => setRepo(e.currentTarget.value)}
			/>
			{/*preview image*/}
			<Box w="100%">
				<ImageUploader handleUrl={handleUrl} />
			</Box>
			<Textarea
				size="lg"
				minH="sm"
				placeholder={'readme'}
				defaultValue={readme}
				onChange={(e) => setReadme(e.currentTarget.value)}
			/>
			<Box dangerouslySetInnerHTML={{ __html: readmeHtml }} />
			<Center>
				<Button
					mt={3}
					colorScheme="green"
					type="submit"
					isLoading={loading}
					onClick={handleCreatePost}
				>
					Submit
				</Button>
			</Center>
		</VStack>
	)
}

export default NewProject