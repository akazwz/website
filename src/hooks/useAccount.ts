import { useEffect, useState } from 'react'
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
	const { data } = useSWR(token.length > 1 ? token : null, MeApi)

	useEffect(() => {
		if (data?.data) {
			const { data: serverData } = data?.data
			const { user } = serverData
			const { uuid: uid, username } = user
			setAccount({ username, uid })
		}
	}, [data?.data])

	return {
		account,
	}
}