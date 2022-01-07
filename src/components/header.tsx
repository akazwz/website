import {
  Box,
  IconButton,
  Spacer,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BsLightningChargeFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <>
      <Flex height="10vh" alignContent="center" alignItems="center">
        <Box>
          <BsLightningChargeFill
            size={30}
            onClick={() => router.push('/')}
            color={router.route === '/' ? '#0070f3' : ''}
          />
        </Box>
        <Spacer/>
        <Box>
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
          <Link
            mr="1.5rem"
            onClick={() => router.push('/login')}
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bolder',
              color: router.route === '/login' ? '#0070f3' : '',
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
            ml={{ base: '0', md: '3' }}
            onClick={toggleColorMode}
            icon={<SwitchIcon/>}
          />
        </Box>
      </Flex>
    </>
  )
}

export default Header
