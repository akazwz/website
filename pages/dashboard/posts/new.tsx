import { Box, Button, Center, Heading, Input, Textarea, useToast } from '@chakra-ui/react'
import { useState, MouseEvent } from 'react'
import { marked } from 'marked'

import { ImageUploader } from '../../../components/ImageUploader'
import { useAuth } from '../../../src/hooks/useAuth'
import { CreatePostApi } from '../../../src/api'

const NewPost = () => {
	const [title, setTitle] = useState('')
	const [cover, setCover] = useState('')
	const [content, setContent] = useState('')
	const [loading, setLoading] = useState(false)

	const markedValue = marked(content)

	const handleUrl = (url: string) => {
		setCover(url)
	}

	const { bearerToken } = useAuth()
	const toast = useToast()

	const handleCreatePost = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		CreatePostApi({ title, cover, content }, bearerToken)
			.then((res) => {
				setLoading(true)
				toast({
					title: 'Create Post Success',
					status: 'success',
					isClosable: true,
					position: 'top',
					duration: 3000,
				})
			})
			.catch((reason) => {
				toast({
					title: 'Create Post Error',
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
		<Box maxW="3xl" mx="auto" as="form">
			<Heading mb={3}>New Post</Heading>
			<Input
				size="lg"
				placeholder="title"
				value={title}
				onInput={(e) => setTitle(e.currentTarget.value)}
			/>
			<ImageUploader handleUrl={handleUrl} />
			<Textarea
				size="lg"
				minH="sm"
				placeholder={'content'}
				defaultValue={content}
				onChange={(e) => setContent(e.currentTarget.value)}
			/>
			<Box dangerouslySetInnerHTML={{ __html: markedValue }} />
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
		</Box>
	)
}

export default NewPost