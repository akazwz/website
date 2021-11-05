import React from 'react'
import {
  Box,
  IconButton,
  Spacer,
  Flex,
  useColorMode,
  Link,
  useColorModeValue, useBoolean
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BsLightningChargeFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const [projectsHover, setProjectsHover] = useBoolean()
  const [aboutHover, setAboutHover] = useBoolean()

  return (
    <>
      <Flex height="10vh" alignContent="center" alignItems="center">
        <Box>
          <BsLightningChargeFill size={30} onClick={() => router.push('/')} />
        </Box>
        <Spacer />
        <Box>
          <Link
            mr="2rem"
            onClick={() => router.push('/projects')}
            onMouseEnter={setProjectsHover.on}
            onMouseLeave={setProjectsHover.off}
            style={{
              textDecoration: projectsHover ? 'underline' : 'none',
              color: projectsHover ? '#0070f3' : '',
              fontSize: projectsHover ? '1.3rem' : '1rem'
            }}
          >
            Projects
          </Link>
          <Link
            mr="3rem"
            onClick={() => router.push('/about')}
            onMouseEnter={setAboutHover.on}
            onMouseLeave={setAboutHover.off}
            style={{
              textDecoration: aboutHover ? 'underline' : 'none',
              color: aboutHover ? '#0070f3' : '',
              fontSize: aboutHover ? '1.3rem' : '1rem',
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
            icon={<SwitchIcon />}
          />
        </Box>
      </Flex>
    </>
  )
}

export default Header
