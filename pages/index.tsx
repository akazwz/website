import { Center, } from '@chakra-ui/react'
import path from 'node:path'
import * as fs from 'fs'
import Layout from '../src/components/layout/layout'
import styles from '../styles/Home.module.css'
import { Text } from '@chakra-ui/layout'

type IndexTrans = {
  creating: string,
  interesting: string,
  thing: string
}

export async function getStaticProps (ctx: { locale: string }) {
  const { locale } = ctx
  const dir = path.join(process.cwd(), 'public', 'languages', 'index')
  const filePath = `${dir}/${locale}.json`
  const buffer = fs.readFileSync(filePath)
  const content: IndexTrans = JSON.parse(buffer.toString())
  return {
    props: {
      content,
    }
  }
}


const IndexPage: (props: { content: IndexTrans }) => JSX.Element = (props: { content: IndexTrans }) => {
  const { content } = props
  return (
    <>
      <Layout>
        <Center
          height="80vh"
          flexDirection="column"
        >
          <span className={styles.wordOne}>
            <Text fontSize={{base: '4rem', md: '6rem'}}>
              {content.creating}
            </Text>
          </span>
          <span className={styles.wordTwo}>
            <Text fontSize={{base: '4rem', md: '6rem'}}>
              {content.interesting}
            </Text>
          </span>
          <span className={styles.wordThree}>
            <Text fontSize={{base: '4rem', md: '6rem'}}>
              {content.thing}
            </Text>
          </span>
        </Center>
      </Layout>
    </>
  )
}

export default IndexPage
