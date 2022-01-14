import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList, useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Translate, English, Chinese } from '@icon-park/react'
import { MainBlue } from '../../../colors'

const LanguagesSwitch = () => {
  const router = useRouter()
  const fillColor = useColorModeValue('black', 'white')
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label={'toggle show navigation links'}
          icon={<Translate theme="outline" size="24" fill={fillColor}/>}
          variant="outline"
        />
        <MenuList>
          <MenuItem
            aria-label={'navigate to about page'}
            fontSize="1.2rem"
            fontWeight="bold"
            _focusVisible={{ boxShadow: 'outline' }}
            color={router.locale === 'en' ? MainBlue : ''}
            icon={<English theme="outline" size="24" fill={router.locale === 'en' ? MainBlue : fillColor}/>}
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
            _focusVisible={{ boxShadow: 'outline' }}
            color={router.locale === 'zh' ? MainBlue : ''}
            icon={<Chinese theme="outline" size="24" fill={router.locale === 'zh' ? MainBlue : fillColor}/>}
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