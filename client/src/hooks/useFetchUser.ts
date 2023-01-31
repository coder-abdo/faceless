import { useQuery } from "react-query"
import { useAuthStore } from "../context"
import { useUserStore } from "../store/store"
import { fetchUser } from "../utils"

export const useFetchUser = () => {
	const url = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_USERS_URL}`
	const { auth } = useAuthStore() as any
	const { user, setUser } = useUserStore()
	const { data: response, isLoading, error } = useQuery({
		queryKey: ['user'], queryFn: () => fetchUser(url, auth.token), onSuccess: data => {
			setUser(data.user)
		}
	})
	return { user, isLoading, error }
}
