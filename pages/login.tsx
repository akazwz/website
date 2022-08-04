import { useState, MouseEvent } from 'react'
import { Button, VStack, Input, Center, Heading, useToast, HStack, Spacer } from '@chakra-ui/react'
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

	const handleLogin = async(event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setLoading(true)
		LoginApi({ username, password })
			.then(async(res) => {
				const { data: serverData } = res.data
				const { token } = serverData
				setLogin(token)
				await router.push('/dashboard')
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
		<Center
			p={3}
			h="100vh"
		>
			<VStack
				borderWidth={1}
				spacing={7}
				px={7}
				py={3}
				rounded="lg"
				as="form"
			>
				<HStack>
					<NextChakraLink href={'/'}>
						<Logo size={'50px'} />
					</NextChakraLink>
					<Spacer />
				</HStack>
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
		</Center>
	)
}

export default Login