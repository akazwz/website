import React from 'react'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
