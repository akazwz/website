import {
  useColorModeValue,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { HamburgerButton, Close } from '@icon-park/react'
import ColorModeToggle from './color-mode-toggle'
import LanguagesSwitch from './languages-switch'
import { HeaderTrans } from './header'

const MobileNav: (props: { trans: HeaderTrans }) => JSX.Element = (props: { trans: HeaderTrans }) => {
  const { trans } = props
  const router = useRouter()
  const fillColor = useColorModeValue('black', 'white')
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
                icon={
                  isOpen
                    ? <Close theme="outline" size="24" fill={fillColor}/>
                    : <HamburgerButton theme="outline" size="24" fill={fillColor}/>
                }
                variant="outline"
              />
              <MenuList>
                <MenuItem
                  aria-label={'navigate to projects page'}
                  fontSize="1.2rem"
                  fontWeight="bold"
                  _focusVisible={{ boxShadow: 'outline' }}
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
                  _focusVisible={{ boxShadow: 'outline' }}
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