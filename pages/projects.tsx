import Layout from '../src/components/layout'
import { Box, Image, Flex, Heading, SimpleGrid, Spacer, Center, Button, useBoolean, Link } from '@chakra-ui/react'
import styles from '../styles/Projects.module.css'
import React from 'react'
import { useRouter } from 'next/router'

const Projects = () => {
  const router = useRouter()
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
            <Link
              mr="1.5rem"
              onClick={() => router.push('/projects')}
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bolder',
              }}
            >
              Project One
            </Link>
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
            <Link
              onClick={() => router.push('/projects')}
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bolder',
              }}
            >
              Project Two
            </Link>
          </Flex>
        </SimpleGrid>
      </Layout>
    </>
  )
}

export default Projects
