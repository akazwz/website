import {
  Flex,
  Heading,
} from '@chakra-ui/react'
import Layout from '../src/components/layout'

const IndexPage = () => {

  return (
    <>
      <Layout>
        <Flex
          height="100%"
          alignContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Heading size="4xl">
            Creating Interesting Things
          </Heading>
        </Flex>
      </Layout>
    </>
  )
}

export default IndexPage
