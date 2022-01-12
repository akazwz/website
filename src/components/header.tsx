import { FC } from 'react'
import {
  Spacer,
  HStack,
  Flex,
  Link,
} from '@chakra-ui/react'
import { BsLightningChargeFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import MobileNav from './mobile-nav'
import ColorModeToggle from './color-mode-toggle'
export type HeaderTrans = {
  projects: string,
  about: string,
}

const Header: FC = () => {
  const router = useRouter()
  const {locale} = router
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
        alignContent="center"
        alignItems="center"
      >
        <Link href="/">
          <BsLightningChargeFill
            size={30}
            color={router.route === '/' ? '#0070f3' : ''}
          />
        </Link>
        <Spacer/>
        <HStack
          alignItems="center"
          spacing={5}
          display={{ base: 'none', md: 'flex' }}
        >
          <Link
            mr="1.5rem"
            onClick={() => router.push('/projects')}
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bolder',
              color: router.route === '/projects' ? '#0070f3' : '',
            }}
          >
            {trans.projects}
          </Link>
          <Link
            mr="1.5rem"
            onClick={() => router.push('/about')}
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bolder',
              color: router.route === '/about' ? '#0070f3' : '',
            }}
          >
            {trans.about}
          </Link>
          <ColorModeToggle/>
        </HStack>
        <MobileNav trans={trans}/>
      </Flex>
    </>
  )
}

export default Header
