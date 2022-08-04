const API_HOST = process.env.API_HOST || 'http://localhost:8080'

export const getPosts = async() => {
	return await fetch(`${API_HOST}/posts`)
}

export const getPost = async(pid: string) => {
	return await fetch(`${API_HOST}/posts/${pid}`)
}
