import { Box, Heading, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import { marked } from 'marked'
import { ImageUploader } from '../../../components/ImageUploader'

const NewPost = () => {
	const [value, setValue] = useState('')
	const markedValue = marked(value)
	return (
		<Box maxW="3xl" mx="auto">
			<Heading mb={3}>New Post</Heading>
			<Input size="lg" placeholder="title" />
			<ImageUploader />
			<Textarea
				size="lg"
				minH="md"
				placeholder={'content'}
				defaultValue={value}
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			<Box dangerouslySetInnerHTML={{ __html: markedValue }} />
		</Box>
	)
}

export default NewPost