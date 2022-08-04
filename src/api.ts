import axios from 'axios'

const API_HOST = process.env.API_HOST || 'http://localhost:8080'

export const GetPostsApi = async() => {
	return axios.get(`${API_HOST}/posts`)
}

export const GetPostApi = async(pid: string) => {
	return axios.get(`${API_HOST}/posts/${pid}`)
}

export const DeletePostApi = async(pid: string, bearerToken: string) => {
	return axios.delete(`${API_HOST}/posts/${pid}`, {
		headers: {
			'Authorization': bearerToken,
		}
	})
}

interface LoginData{
	username: string
	password: string
}

export const LoginApi = async(data: LoginData) => {
	return axios.post(`${API_HOST}/auth/login`, data)
}