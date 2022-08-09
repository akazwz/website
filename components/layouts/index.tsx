import type { ReactNode } from 'react'
import { useRouter } from 'next/router'

import { DashboardLayout } from './dashboard'
import HomeLayout from './home'

export interface LayoutProps{
	children: ReactNode
}

const Layouts = ({ children }: LayoutProps) => {
	const router = useRouter()
	const pathname = router.pathname

	const emptyLayoutRoutes = ['/login']
	if (emptyLayoutRoutes.includes(pathname)) {
		return <>{children}</>
	}

	if (pathname.startsWith('/dashboard')) {
		return <DashboardLayout>{children}</DashboardLayout>
	}

	return (
		<HomeLayout>
			{children}
		</HomeLayout>
	)
}

export default Layouts