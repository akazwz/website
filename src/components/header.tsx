import { FC } from 'react'
import {
  Spacer,
  HStack,
  Flex,
  Link,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BsLightningChargeFill } from 'react-icons/bs'
import MobileNav from './mobile-nav'
import ColorModeToggle from './color-mode-toggle'

export type HeaderTrans = {
  projects: string,
  about: string,
}

const Header: FC = () => {
  const router = useRouter()
  const { locale } = router
  let trans: HeaderTrans
  switch (locale) {
    case 'en-US':
      trans = {
        projects: 'Projects',
        about: 'About',
      }
      break
    case 'zh-CN':
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
        <Link href="/">
          <BsLightningChargeFill
            size={33}
            color={router.route === '/' ? '#0070f3' : ''}
          />
        </Link>
        <Spacer/>
        <HStack
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <HStack spacing={7}>
            <Link
              href={'/projects'}
              _hover={{ textDecoration: 'underline' }}
              _focus={{ textDecoration: 'underline' }}
              color={router.route === '/projects' ? '#0070f3' : ''}
              fontSize="1.2rem"
            >
              {trans.projects}
            </Link>
            <Link
              href={'/about'}
              _hover={{ textDecoration: 'underline' }}
              _focus={{ textDecoration: 'underline' }}
              color={router.route === '/about' ? '#0070f3' : ''}
              fontSize="1.2rem"
            >
              {trans.about}
            </Link>
          </HStack>
          <Flex>
            <ColorModeToggle/>
          </Flex>
        </HStack>
        <MobileNav trans={trans}/>
      </Flex>
    </>
  )
}

export default Header
