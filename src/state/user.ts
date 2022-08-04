import { atom, selector } from 'recoil'

/* record if user choose to remember me checkbox */
export const isRememberState = atom<boolean>({
	key: 'isRemember',
	default: false,
})

export const isAuthLoadingState = atom<boolean>({
	key: 'isAuthLoading',
	default: true,
})

export const tokenState = atom<string | null>({
	key: 'token',
	default: null,
})

export const isAuthState = atom<boolean>({
	key: 'isAuth',
	default: false
})

export const apiTokenState = atom<string | null>({
	key: 'apiToken',
	default: null,
})

/*export const isAuthState = selector({
	key: 'isAuth',
	get: ({ get }) => {
		const token = get(tokenState)
		return !!token
	},
})*/

export const bearerTokenState = selector({
	key: 'bearerToken',
	get: ({ get }) => {
		const token = get(tokenState)
		return `Bearer ${token}`
	},
})