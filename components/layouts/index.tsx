import type { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

import Header from './Header'
import Footer from './Footer'

interface LayoutProps{
	children: ReactNode
}

const Layouts = ({ children }: LayoutProps) => {
	return (
		<Layout>
			{children}
		</Layout>
	)
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<Box>
			<Header />
			<Box
				as="main"
				maxW={'5xl'}
				mx={'auto'}
				px={5}
				pt={24} pb={{ base: 24, md: 16 }}
			>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}

export default Layouts