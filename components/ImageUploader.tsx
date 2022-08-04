import { AspectRatio, Box, Image, Input, useToast, VStack } from '@chakra-ui/react'
import { useRef, DragEvent, useState } from 'react'
import { Add, UploadOne } from '@icon-park/react'

export const ImageUploader = () => {
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
	}

	return (
		<Box
			m={3}
			p={7}
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