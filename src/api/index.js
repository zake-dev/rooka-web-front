import axios from 'axios'

export const axiosService = axios.create({
	baseURL: process.env.VUE_APP_ROOKA_API_URL
})