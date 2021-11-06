import {
  Heading,
  Center,
} from '@chakra-ui/react'
import Layout from '../src/components/layout'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Center
          height="100%"
        >
          <Heading size="4xl" textAlign="center">
            Creating Interesting Things
          </Heading>
        </Center>
      </Layout>
    </>
  )
}

export default IndexPage
