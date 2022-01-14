import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
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
            aria-label={'navigate to about page'}
            fontSize="1.2rem"
            fontWeight="bold"
            color={router.locale === 'en' ? '#0070f3' : ''}
            onClick={() => {
              router.push(router.asPath, router.asPath, { locale: 'en' }).then()
            }}
          >
            English
          </MenuItem>
          <MenuItem
            aria-label={'navigate to about page'}
            fontSize="1.2rem"
            fontWeight="bold"
            color={router.locale === 'zh' ? '#0070f3' : ''}
            onClick={() => {
              router.push(router.asPath, router.asPath, { locale: 'zh' }).then()
            }}
          >
            简体中文
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default LanguagesSwitch