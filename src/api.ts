import axios from 'axios'

const API_HOST = process.env.API_HOST || 'http://localhost:8080'

export const GetPostsApi = async() => {
	return axios.get(`${API_HOST}/posts`)
}

export const GetPostApi = async(pid: string) => {
	return axios.get(`${API_HOST}/posts/${pid}`)
}

interface CreatePostData{
	title: string
	cover: string
	content: string
}

export const CreatePostApi = async(data: CreatePostData, bearerToken: string) => {
	return axios.post(`${API_HOST}/posts`, data,{
		headers: {
			'Authorization': bearerToken,
		}
	})
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

export const MeApi = async(bearerToken: string) => {
	if (bearerToken.length < 10) {
		return null
	}
	return axios.get(`${API_HOST}/auth/me`, {
		headers: {
			Authorization: bearerToken,
		}
	})
}