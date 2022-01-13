import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRouter } from 'next/router'
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
                  _focus={{ textDecoration: 'none', color: '#0070f3' }}
                  fontWeight={router.route === '/projects' ? 'bolder' : 'normal'}
                  fontSize={router.route === '/projects' ? 'large' : 'medium'}
                  onClick={()=>router.push('/projects')}
              >
                    {trans.projects}
                </MenuItem>
                <MenuItem
                  aria-label={'navigate to about page'}
                  _focus={{ textDecoration: 'none', color: '#0070f3' }}
                  fontWeight={router.route === '/about' ? 'bolder' : 'normal'}
                  fontSize={router.route === '/about' ? 'large' : 'medium'}
                  onClick={()=>router.push('/about')}

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