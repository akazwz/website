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
				mx="auto"
				minH={{ base: '74vh', md: '77vh' }}
				py={3}
			>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}

export default Layouts