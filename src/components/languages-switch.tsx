import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

const LanguagesSwitch = () => {
  return (
    <>
      <HStack display={{ base: 'flex', md: 'none' }}>
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
            >
              <Link href='/' locale="en-US"/>
            </MenuItem>
            <MenuItem
              aria-label={'navigate to about page'}
            >
              <Link href='/' locale="zh-CN"/>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </>
  )
}