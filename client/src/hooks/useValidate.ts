import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'

	export const useValidate = (schema) =>{
		 const { register, handleSubmit, formState: { errors, isLoading  } } = useForm({
			resolver: yupResolver(schema)
		})
		return { register, handleSubmit,  errors, isLoading }
	}
