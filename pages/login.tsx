import { FC } from 'react'
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorModeValue
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Login: FC = () => {
  const router = useRouter()
  const formBackground = useColorModeValue('grey.100', 'grey.700')
  return (
    <Flex height="100%" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={5}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="akazwz@pm.me" variant="filled" mb={3} type="email"/>
        <Input placeholder="********" variant="filled" mb={6} type="password"/>
        <Button mb={6} colorScheme="teal" onClick={() => router.push('/about')}>Log in</Button>
      </Flex>
    </Flex>
  )
}

export default Login
