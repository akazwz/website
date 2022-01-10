import { FC } from 'react'
import {
  IconButton,
  Spacer,
  HStack,
  Flex,
  Link,
} from '@chakra-ui/react'
import { BsLightningChargeFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import MobileNav from './mobile-nav'
import ColorModeToggle from './color-mode-toggle'

const Header: FC = () => {
  const router = useRouter()

  return (
    <>
      <Flex
        height="10vh"
        alignContent="center"
        alignItems="center"
      >
        <Link href="/">
          <BsLightningChargeFill
            size={30}
            color={router.route === '/' ? '#0070f3' : ''}
          />
        </Link>
        <Spacer/>
        <HStack
          alignItems="center"
          spacing={5}
          display={{ base: 'none', md: 'flex' }}
        >
          <Link
            mr="1.5rem"
            onClick={() => router.push('/projects')}
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bolder',
              color: router.route === '/projects' ? '#0070f3' : '',
            }}
          >
            Projects
          </Link>
          <Link
            mr="1.5rem"
            onClick={() => router.push('/about')}
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bolder',
              color: router.route === '/about' ? '#0070f3' : '',
            }}
          >
            About
          </Link>
          <ColorModeToggle/>
        </HStack>
        <MobileNav/>
      </Flex>
    </>
  )
}

export default Header
