import type { ReactNode } from 'react'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Header from './Header'
import Footer from './Footer'
import { DashboardLayout } from '../dashboard/layout'
import { useAuth } from '../../src/hooks/useAuth'

interface LayoutProps{
	children: ReactNode
}

const Layouts = ({ children }: LayoutProps) => {
	const router = useRouter()
	const pathname = router.pathname

	const {loading, error, token} = useAuth()

	const emptyLayoutRoutes = ['/login']
	if (emptyLayoutRoutes.includes(pathname)) {
		return <>{children}</>
	}

	if (pathname.startsWith('/dashboard')) {
		if (loading) {
			return (
				<Center h="100vh">
					<Spinner/>
				</Center>
			)
		}

		if (error || token.length < 10) {
			router.push('/login').then()
			return (
				<Center h="100vh">
					<Spinner />
				</Center>
			)
		}

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