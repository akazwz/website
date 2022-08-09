import axios from 'axios'

const API_HOST = process.env.API_HOST || 'https://api.onio.cc'

// posts
interface CreatePostData{
	title: string
	cover: string
	content: string
}

export const GetPostsApi = async() => {
	return axios.get(`${API_HOST}/posts`)
}

export const GetPostApi = async(pid: string) => {
	return axios.get(`${API_HOST}/posts/${pid}`)
}

export const CreatePostApi = async(data: CreatePostData, bearerToken: string) => {
	return axios.post(`${API_HOST}/posts`, data, {
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

// projects
interface CreateProjectData{
	name: string
	about: string
	website?: string
	repo?: string
	preview?: string
	readme?: string
}

export const GetProjectsApi = async() => {
	return axios.get(`${API_HOST}/projects`)
}


export const GetProjectApi = async(pid: string) => {
	return axios.get(`${API_HOST}/projects/${pid}`)
}

export const CreateProjectApi = async(data: CreateProjectData, bearerToken: string) => {
	return axios.post(`${API_HOST}/projects`, data, {
		headers: {
			'Authorization': bearerToken,
		}
	})
}

export const DeleteProjectApi = async(pid: string, bearerToken: string) => {
	return axios.delete(`${API_HOST}/projects/${pid}`, {
		headers: {
			'Authorization': bearerToken,
		}
	})
}

// login
interface LoginData{
	username: string
	password: string
}

export const LoginApi = async(data: LoginData) => {
	return axios.post(`${API_HOST}/auth/login`, data)
}

// account
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