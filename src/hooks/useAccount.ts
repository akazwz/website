import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import useSWR from 'swr'

import { MeApi } from '../api'
import { useAuth } from './useAuth'

interface AccountProps{
	username: string
	uid: string
}

export const useAccount = () => {
	const [account, setAccount] = useState<AccountProps | null>(null)
	const { token } = useAuth()
	const { data, error } = useSWR(token.length > 1 ? token : null, MeApi)

	const router = useRouter()
	const toast = useToast()

	useEffect(() => {
		if (data?.data) {
			const { data: serverData } = data?.data
			const { user } = serverData
			const { uuid: uid, username } = user
			setAccount({ username, uid })
		}
		if (data?.status === 401) {
			toast({
				title: 'Login Expires',
				status: 'error',
				position: 'top',
			})
			router.push('/login').then()
		}
	}, [data?.data, data?.status, router, toast])

	return {
		account,
	}
}