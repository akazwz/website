import { Box } from '@chakra-ui/react'

import HomeHeader from './Header'
import HomeFooter from './Footer'
import { LayoutProps } from '../index'

const HomeLayout = ({ children }: LayoutProps) => {
	return (
		<Box>
			<HomeHeader />
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
			<HomeFooter />
		</Box>
	)
}

export default HomeLayout