import { FC } from 'react'
import {
  HStack,
  IconButton,
  Menu, MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'
import ColorModeToggle from './color-mode-toggle'

const MobileNav: FC = () => {
  const router = useRouter()
  return (
    <HStack display={{ base: 'flex', md: 'none' }}>
      <ColorModeToggle/>
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
    </HStack>
  )
}

export default MobileNav