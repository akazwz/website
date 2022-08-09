import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import theme from '../src/theme'
import Layouts from '../components/layouts'
import '../src/global.css'

// nProgress
const ProgressBar = dynamic(() => import('../components/ProgressBar'), { ssr: false })

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ProgressBar />
			<ChakraProvider theme={theme}>
				<Layouts>
					<Component {...pageProps} />
				</Layouts>
			</ChakraProvider>
		</RecoilRoot>
	)
}

export default MyApp
