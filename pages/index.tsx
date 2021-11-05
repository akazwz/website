import { useRouter } from 'next/router'
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../src/components/layout';

const IndexPage = () => {
  const router = useRouter()
  const formBackground = useColorModeValue('grey.100', 'grey.700')
  return (
    <>
      <Layout>
        <Flex height="100%" alignItems="center" justifyContent="center">
          <Flex direction="column" background={formBackground} p={12} rounded={5}>
            <Heading mb={6}>Log in</Heading>
            <Input placeholder="akazwz@pm.me" variant="filled" mb={3} type="email" />
            <Input placeholder="********" variant="filled" mb={6} type="password" />
            <Button mb={6} colorScheme="teal" onClick={() => router.push('/about')}>Log in</Button>
          </Flex>
        </Flex>
      </Layout>
    </>
  )
}

export default IndexPage
