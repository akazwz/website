export interface Post{
	uuid: string
	title: string
	cover: string
	content: string
	uid: string
	created_at: string
}

export interface Project{
	uuid: string
	name: string
	about: string
	website?: string
	repo?: string
	preview?: string
	readme?: string
	uid: string
	created_at: string
}