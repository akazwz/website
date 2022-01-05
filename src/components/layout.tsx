import { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'
import Header from './header'
import Footer from './footer'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container maxW="5xl">
      <Header/>
      <main style={{ minHeight: '80vh' }}>{children}</main>
      <Footer/>
    </Container>
  )
}

export default Layout
