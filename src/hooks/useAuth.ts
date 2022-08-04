import { useEffect, useState } from 'react'

interface AccountProps{
	username: string
	uid: string
}

export const useAuth = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [token, setToken] = useState<string>('')
	const [account, setAccount] = useState<AccountProps | null>(null)

	const bearerToken = `Bearer ${token}`

	useEffect(() => {
		const token = sessionStorage.getItem('token')
		if (token) {
			setToken(token)
		} else {
			setError(true)
		}
		setLoading(false)
	}, [])

	const setLogin = (token: string) => {
		sessionStorage.setItem('token', token)
		setToken(token)
	}

	const signOut = () => {
		sessionStorage.removeItem('token')
		setToken('')
	}

	return {
		loading,
		error,
		token,
		bearerToken,
		setLogin,
		signOut,
	}
}