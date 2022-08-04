import { AspectRatio, Box, Image, Input, useToast, VStack } from '@chakra-ui/react'
import { useRef, DragEvent, useState } from 'react'
import { Add } from '@icon-park/react'
import axios from 'axios'
import FormData from 'form-data'

interface ImageUploaderProps{
	handleUrl: (url: string) => void
}

export const ImageUploader = ({ handleUrl }: ImageUploaderProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [progress, setProgress] = useState(0)
	const [url, setUrl] = useState<string>('')
	const [borderColor, setBorderColor] = useState<string>('')

	const toast = useToast()

	// 弹出选择文件
	const handleSelectFile = () => {
		inputRef.current?.click()
	}

	// 选择文件之后
	const handleFileChange = async() => {
		// 获取文件
		const file = inputRef.current?.files?.item(0)
		if (!file) {
			return
		}
		await upload(file)
	}

	// 拖拽上传文件
	const handleBoxOnDrop = async(e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setBorderColor('')
		const file = e.dataTransfer.files.item(0)
		if (!file) return
		await upload(file)
	}

	const upload = async(file: File) => {
		// 上传之前重置 进度
		setProgress(0)
		setUrl('')
		// 限制文件大小 100MB
		if (file.size > 100 * 1024 * 1024) {
			toast({
				title: 'Max File Size is 100MB',
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
			return
		}
		const form = new FormData()
		form.append('file', file)
		const res = await axios.post('https://media.onio.cc', form)
		const { url } = res.data
		setUrl(url)
		handleUrl(url)
	}

	return (
		<Box
			p={3}
			mx="auto"
			onClick={handleSelectFile}
			onDragOver={(e) => {
				e.preventDefault()
				setBorderColor('blue.500')
			}}
			onDragLeave={(e) => {
				e.preventDefault()
				setBorderColor('')
			}}
			onDrop={handleBoxOnDrop}
		>
			<AspectRatio ratio={21 / 9}>
				<Box borderWidth={3} borderStyle="dashed" borderColor={borderColor} rounded="lg">
					{
						url.length < 1 ? (
								<VStack>
									<Add size={50} strokeWidth={1} />
								</VStack>
							)
							: <Image src={url} alt={'cover'} />
					}
				</Box>
			</AspectRatio>
			<Input
				type="file"
				hidden
				ref={inputRef}
				multiple={false}
				onChange={handleFileChange}
			/>
		</Box>
	)
}