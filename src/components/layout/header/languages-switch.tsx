import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoLanguage } from 'react-icons/io5'
import { useRouter } from 'next/router'

const LanguagesSwitch = () => {
  const router = useRouter()
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label={'toggle show navigation links'}
          icon={<IoLanguage/>}
          variant="outline"
        />
        <MenuList>
          <MenuItem
            aria-label={'navigate to projects page'}
            textDecoration="none"
          >
            <NextLink href={router.asPath} locale="zh" passHref>
              <Link flex={1}>
                简体中文
              </Link>
            </NextLink>
          </MenuItem>
          <MenuItem
            aria-label={'navigate to about page'}
            textDecoration="none"
          >
            <NextLink href={router.asPath} locale="en" passHref>
              <Link flex={1}>
                English
              </Link>
            </NextLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default LanguagesSwitch