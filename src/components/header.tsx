import { FC } from 'react'
import {
  IconButton,
  Spacer,
  HStack,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BsLightningChargeFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import MobileNav from './mobile-nav'

const Header: FC = () => {
  const router = useRouter()
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

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
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            m="3"
            onClick={toggleColorMode}
            icon={<SwitchIcon/>}
          />
        </HStack>
        <MobileNav/>
      </Flex>
    </>
  )
}

export default Header
