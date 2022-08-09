import { useState, MouseEvent } from 'react'
import {
	Button,
	VStack,
	Input,
	Heading,
	HStack,
	useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { NextChakraLink } from '../components/NextChakraLink'
import { Logo } from '../components/Logo'
import { useAuth } from '../src/hooks/useAuth'
import { LoginApi } from '../src/api'

const Login = () => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [loading, setLoading] = useState(false)

	const { setLogin } = useAuth()

	const toast = useToast()

	const router = useRouter()

	const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setLoading(true)
		LoginApi({ username, password })
			.then((res) => {
				const { data: serverData } = res.data
				const { token } = serverData
				setLogin(token)
				router.push('/dashboard').then()
			})
			.catch((e) => {
				toast({
					title: 'Login Error',
					status: 'error',
					position: 'top',
					duration: 3000,
					isClosable: true,
				})
			})
			.finally(() => {
				setLoading(false)
			})
	}

	return (
		<VStack
			p={3}
			spacing={7}
			h="100vh"
			justifyContent="center"
		>
			<HStack>
				<NextChakraLink href={'/'} color={'purple.500'}>
					<Logo size={'21px'} />
				</NextChakraLink>
			</HStack>
			<VStack
				borderWidth={1}
				spacing={7}
				px={7}
				py={3}
				rounded="lg"
				as="form"
			>
				<Heading>Login</Heading>
				<Input
					placeholder={'username'}
					onInput={(event) => setUsername(event.currentTarget.value)}
				/>
				<Input
					placeholder={'password'}
					onInput={(event) => setPassword(event.currentTarget.value)}
				/>
				<Button
					type="submit"
					onClick={handleLogin}
					isLoading={loading}
				>
					Login
				</Button>
			</VStack>
		</VStack>
	)
}

export default Login