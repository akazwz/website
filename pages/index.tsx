import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('grey.100', 'grey.700')
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={5}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="akazwz@pm.me" variant="filled" mb={3} type="email" />
        <Input placeholder="********" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal">Log in</Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  )
}

export default IndexPage
