import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaBars, FaTimes } from 'react-icons/fa'
import ColorModeToggle from './color-mode-toggle'
import { HeaderTrans } from './header'
import LanguagesSwitch from './languages-switch'

const MobileNav: (props: { trans: HeaderTrans }) => JSX.Element = (props: { trans: HeaderTrans }) => {
  const { trans } = props
  const router = useRouter()
  return (
    <HStack display={{ base: 'flex', md: 'none' }}>
      <LanguagesSwitch/>
      <ColorModeToggle/>
      <Menu>
        {
          ({ isOpen }) => (
            <>
              <MenuButton
                as={IconButton}
                aria-label={'toggle show navigation links'}
                icon={isOpen ? <FaTimes/> : <FaBars/>}
                variant="outline"
              />
              <MenuList>
                <MenuItem
                  aria-label={'navigate to projects page'}
                  fontSize="1.2rem"
                  fontWeight="bold"
                  color={router.route === '/projects' ? '#0070f3' : ''}
                  onClick={() => {
                    router.push('/projects', '/projects', { locale: router.locale }).then()
                  }}
                >
                  {trans.projects}
                </MenuItem>
                <MenuItem
                  aria-label={'navigate to about page'}
                  fontSize="1.2rem"
                  fontWeight="bold"
                  color={router.route === '/about' ? '#0070f3' : ''}
                  onClick={() => {
                    router.push('/about', '/about', { locale: router.locale }).then()
                  }}
                >
                  {trans.about}
                </MenuItem>
              </MenuList>
            </>
          )
        }
      </Menu>
    </HStack>
  )
}

export default MobileNav