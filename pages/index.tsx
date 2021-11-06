import { Center } from '@chakra-ui/react'
import Layout from '../src/components/layout'
import styles from '../styles/Home.module.css'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Center
          height="80vh"
          flexDirection="column"
        >
          <span className={styles.wordOne}>
            Creating.
          </span>
          <span className={styles.wordTwo}>
            Interesting.
          </span>
          <span className={styles.wordThree}>
            Thing.
          </span>
        </Center>
      </Layout>
    </>
  )
}

export default IndexPage
