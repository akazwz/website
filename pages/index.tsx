import { Heading, Image, VStack } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getServerSideProps: GetServerSideProps = async({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || 'en', ['common'])),
		},
	}
}

const Index = () => {
	return (
		<VStack
			display={'flex'}
			justifyContent={'center'}
			spacing={7}
			minH={'50vh'}
		>
			<Image
				boxSize={'100px'}
				rounded={'full'}
				draggable={false}
				alt={'avatar'}
				src={'https://avatars.githubusercontent.com/u/50396286?v=4'}
			/>
			<VStack>
				<Heading>
					AKAZWZ
				</Heading>
			</VStack>
		</VStack>
	)
}

export default Index