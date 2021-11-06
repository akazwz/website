import Layout from '../src/components/layout'
import { Box, Image, Flex, Heading, SimpleGrid, Spacer, Center, Button, useBoolean } from '@chakra-ui/react'
import styles from '../styles/Projects.module.css'

const Projects = () => {
  return (
    <>
      <Layout>
        <Heading size="xl" textAlign="center" mb="1rem">
          Created Things
        </Heading>
        <SimpleGrid columns={[1, null, 2]}>
          <Flex
            height="70vh"
            flexDirection="column"
            padding="2rem"
            marginTop={3}
            className={styles.card}
          >
            <Box
              width="100%"
              height="65vh"
              backgroundImage="https://bit.ly/2Z4KKcF"
              borderRadius="lg"
              overflow="hidden"
            >
            </Box>
            <a href="/projects">
              <Heading>
                Project One
              </Heading>
            </a>
          </Flex>
          <Flex
            height="70vh"
            flexDirection="column"
            padding="2rem"
            marginTop={3}
            className={styles.card}
          >
            <Box
              width="100%"
              height="65vh"
              backgroundImage="https://bit.ly/2Z4KKcF"
              borderRadius="lg"
              overflow="hidden"
            >
            </Box>
            <Heading>
              Project Two
            </Heading>
          </Flex>
        </SimpleGrid>
      </Layout>
    </>
  )
}

export default Projects
