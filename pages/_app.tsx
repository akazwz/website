import { ChakraProvider } from '@chakra-ui/react'

import theme from '../src/theme'
import Layouts from '../components/layouts'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layouts>
				<Component {...pageProps} />
			</Layouts>
		</ChakraProvider>
	)
}

export default MyApp
