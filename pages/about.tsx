import { Center, Heading } from '@chakra-ui/react'
import Layout from '../src/components/layout/layout'

const AboutPage = () => {
  return (
    <>
      <Layout>
        <Center height="80vh">
          <Heading size="4xl">
            👋Hola!
          </Heading>
        </Center>
      </Layout>
    </>
  )
}

export default AboutPage
