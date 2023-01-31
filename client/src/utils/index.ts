import axios from "axios";
import * as yup from 'yup'
import { LoginDto, SignupDto } from "../types"
export const login = async (loginDto: LoginDto) => {
	const url = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_AUTH_URL}/login`;
	const { data: response } = await axios.post(url, loginDto)
	return response;
}
export const signup = async (signupDto: SignupDto) => {
	const url = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_AUTH_URL}/register`;
	const { data: response } = await axios.post(url, signupDto)
	return response;
}
export const signupSchema = yup.object({
	firstName: yup.string().required("first name is required"),
	lastName: yup.string().required("last name is required"),
	location: yup.string().required("location is required"),
	occupation: yup.string().required("occupation is required"),
	picture: yup.mixed().required("picture is required"),
	email: yup.string().email("invalid email").required(),
	password: yup.string().min(6, "must be at least 6 characters").required()
}).required()
export const loginSchema = yup.object({
	email: yup.string().email("invalid email").required(),
	password: yup.string().min(6, "must be at least 6 characters").required()
}).required()

export const uploadImage = async (formData: any, image: string) => {
	try {
		formData.append("file", image)
		formData.append("upload_preset", "socialApp")
		const { data: response } = await axios.post(`${import.meta.env.VITE_CLOUD_URL}`, formData)
		return response;
	} catch (err) {
		if (err instanceof Error) {
			console.log(err.message)
		}
	}
}
export const fetchUser = async (url: string, token?: string) => {
	const { data } = await axios.get(url, {
		headers: {
			'access-token': `Bearer ${token}`
		}
	})
	return data;
}
