import { useThemeStore } from "../../context"
import { useNavigateToLogin } from "../../store/store"
import { Login } from "./login"
import { Signup } from "./register"
import { Container, HaveAnAccount, LoginLogo, Title } from "./style"

export const LoginSingup = () => {
	const { isSuccessToNavigate, setIsSuccessToNavigate } = useNavigateToLogin()
	const { theme } = useThemeStore() as any
	return (
		<Container>
			<LoginLogo>
				<Title theme={theme} isInLogo>FACELESS</Title>
			</LoginLogo>
			{!isSuccessToNavigate ? <Signup /> : <Login />}
			<HaveAnAccount role="link" onClick={() => setIsSuccessToNavigate(!isSuccessToNavigate)}>{isSuccessToNavigate ? 'already have an account?' : "haven't create an account yet?"}</HaveAnAccount>
		</Container>
	)
}
