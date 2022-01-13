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

const MobileNav: (props: { trans: HeaderTrans }) => JSX.Element = (props: { trans: HeaderTrans }) => {
  const { trans } = props
  const router = useRouter()
  return (
    <HStack display={{ base: 'flex', md: 'none' }}>
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
                  fontWeight={router.route === '/projects' ? 'bolder' : 'normal'}
                  color={router.route === '/projects' ? '#0070f3' : ''}
                  onClick={() => router.push('/projects')}
                >
                  {trans.projects}
                </MenuItem>
                <MenuItem
                  aria-label={'navigate to about page'}
                  fontWeight={router.route === '/about' ? 'bolder' : 'normal'}
                  color={router.route === '/about' ? '#0070f3' : ''}
                  onClick={() => router.push('/about')}
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