import { FC } from 'react'
import {
  Spacer,
  HStack,
  Flex,
  Link,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { BsLightningChargeFill } from 'react-icons/bs'
import MobileNav from './mobile-nav'
import ColorModeToggle from './color-mode-toggle'
import LanguagesSwitch from './languages-switch'
import { Text } from '@chakra-ui/layout'

export type HeaderTrans = {
  projects: string,
  about: string,
}

const Header: FC = () => {
  const router = useRouter()
  const { locale } = router
  let trans: HeaderTrans
  switch (locale) {
    case 'en':
      trans = {
        projects: 'Projects',
        about: 'About',
      }
      break
    case 'zh':
      trans = {
        projects: '项目',
        about: '关于',
      }
      break
    default:
      trans = {
        projects: 'Projects',
        about: 'About',
      }
  }

  return (
    <>
      <Flex
        height="10vh"
        alignItems="center"
      >
        <NextLink href="/" locale={router.locale} passHref>
          <Link>
            <BsLightningChargeFill
              size={33}
              color={router.route === '/' ? '#0070f3' : ''}
            />
          </Link>
        </NextLink>
        <Spacer/>
        <HStack
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
          spacing={5}
        >
          <HStack
            name='links-container'
            spacing={7}
            fontSize='1.2rem'
            fontWeight='bold'
          >
            <NextLink
              href={'/projects'}
              locale={router.locale}
              passHref
            >
              <Link color={router.route === '/projects' ? '#0070f3' : ''}>
                {trans.projects}
              </Link>
            </NextLink>
            <NextLink
              href={'/about'}
              locale={router.locale}
              passHref
            >
              <Link color={router.route === '/about' ? '#0070f3' : ''}>
                {trans.about}
              </Link>
            </NextLink>
          </HStack>
          <HStack spacing={5}>
            <LanguagesSwitch/>
            <ColorModeToggle/>
          </HStack>
        </HStack>
        <MobileNav trans={trans}/>
      </Flex>
    </>
  )
}

export default Header
