import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'

import theme from '../src/theme'
import Layouts from '../components/layouts'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ChakraProvider theme={theme}>
				<Layouts>
					<Component {...pageProps} />
				</Layouts>
			</ChakraProvider>
		</RecoilRoot>
	)
}

export default MyApp
