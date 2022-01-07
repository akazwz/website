import {
  Box,
  IconButton,
  Spacer,
  Flex,
  Link,
  useColorMode,
  useColorModeValue, useBreakpointValue, Menu, MenuButton, MenuList, MenuItem, Text,
} from '@chakra-ui/react'
import { FaMoon, FaSun, FaBars } from 'react-icons/fa'
import { BsLightningChargeFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const showMore = useBreakpointValue({ base: false, sm: true, md: false })

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
        <Flex
          w="30%"
          alignItems="center"
          flexDirection={useBreakpointValue({ base: 'row', sm: 'row-reverse', md: 'row' })}
        >
          {showMore
            ?
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label={'toggle show navigation links'}
                icon={<FaBars/>}
                variant="outline"
              />
              <MenuList>
                <MenuItem
                  aria-label={'navigate to projects page'}
                  onClick={() => router.push('/projects')}
                >
                  <Text
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bolder',
                      color: router.route === '/projects' ? '#0070f3' : '',
                    }}
                  >
                    Projects
                  </Text>
                </MenuItem>
                <MenuItem
                  aria-label={'navigate to about page'}
                  onClick={() => router.push('/about')}
                >
                  <Text
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bolder',
                      color: router.route === '/about' ? '#0070f3' : '',
                    }}
                  >
                    About
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
            :
            <>
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
              <Spacer/>
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
            </>
          }
          {showMore ? null : <Spacer/>}
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            m='3'
            onClick={toggleColorMode}
            icon={<SwitchIcon/>}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Header
