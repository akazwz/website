import type { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Header from './Header'
import Footer from './Footer'
import { DashboardLayout } from '../dashboard/layout'

interface LayoutProps{
	children: ReactNode
}

const Layouts = ({ children }: LayoutProps) => {
	const router = useRouter()
	const pathname = router.pathname
	if (pathname.startsWith('/dashboard')) {
		return (
			<DashboardLayout>
				{children}
			</DashboardLayout>
		)
	}

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
				maxW={'2xl'}
				mx={'auto'}

				px={5}
				pt={12}
				pb={{ base: 24, md: 16 }}
			>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}

export default Layouts