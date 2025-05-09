import axios, { AxiosInstance } from 'axios'

class Api {
	instance: AxiosInstance

	constructor() {
		this.instance = axios.create({
			baseURL: import.meta.env.VITE_BASE_URL,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	getInstance(): AxiosInstance {
		return this.instance
	}
}

export const api = new Api().getInstance()
