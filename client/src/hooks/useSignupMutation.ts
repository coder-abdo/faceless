import { useMutation } from "react-query"
import { useNavigateToLogin } from "../store/store"
import { signup, uploadImage } from "../utils"
export const useSignupMutation = () => {
	const {setIsSuccessToNavigate} = useNavigateToLogin()
	const formData = new FormData()
	const { mutate, isLoading, status } = useMutation(signup, {
		onError: err => {
			if (err instanceof Error) {
				console.log(err.message)
			}
		}
	})
	const onSubmit = async (data: any) => {
		const resp = await await uploadImage(formData, data.picture[0])
		mutate({ ...data, picturePath: resp.secure_url })
		setIsSuccessToNavigate(true);
	}
	return { onSubmit, isLoading, status }
}
