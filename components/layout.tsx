import React from 'react'
import Header from './header'
import Footer from './footer'

type Props = {
  loading?: boolean
  children: React.ReactNode
}

const Layout = ({ loading, children }: Props) => {
  return (
    <>
      <Header loading={loading} />
      <main style={{ height: '86vh' }}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
