import { FC } from 'react'
import Image from 'next/image'
import { Flex, Text } from '@chakra-ui/react'

const Footer: FC = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="7vh">
      <footer style={{ textAlign: 'center' }}>
        <Flex>
          <Text
            style={{
              fontWeight: '500',
            }}
          >
            Powered By {' '}
          </Text>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
            }}>
             <span style={{
               height: '1rem',
               marginLeft: '0.5rem'
             }}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
          </a>
          <a
            href="https://chakra-ui.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
            }}>
            <span style={{
              height: '1rem',
            }}>
            <Image src="/chakra-ui.svg" alt="Chakra-UI Logo" width={72} height={16}/>
          </span>
          </a>
        </Flex>
      </footer>
    </Flex>
  )
}

export default Footer
