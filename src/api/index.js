import axios from "axios";

const $ = axios.create({
	baseURL: process.env.ROOKA_API_URL,
});