import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../context"
import { login } from "../utils"

export const useLoginMutation = () =>{
	const {setAuth} = useAuthStore() as any;
	const navigate = useNavigate();
	const queryClient = useQueryClient()
	const { mutate, isLoading,  } = useMutation(login, {
		onSuccess:  data => {
			console.log(data)
			if(data){
				setAuth({token: data.token, isAuthenticated: true})
				sessionStorage.setItem('auth',JSON.stringify({token: data.token, isAuthenticated: true}))
				navigate('/home')
			}
		},
		onError: err => {
		if(err instanceof Error){
			console.log(err.message)
		}
		},
		onSettled: () => {
			queryClient.invalidateQueries("login")
		}
	})
	const onSubmit = (data: any) => {
		mutate(data )
	}
	return { onSubmit, isLoading}
}
