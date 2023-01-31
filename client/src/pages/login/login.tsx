
import { useThemeStore } from "../../context";
import { useLoginMutation } from "../../hooks/useLoginMutation"
import { useValidate } from "../../hooks/useValidate";
import { loginSchema } from "../../utils";
import { Alert, Form, Input, SubmitButton, Title } from "./style"
export const Login = () => {
	const { theme } = useThemeStore() as any;
	const { register, handleSubmit, errors } = useValidate(loginSchema);
	const { onSubmit, isLoading } = useLoginMutation()
	return (
		<Form theme={theme} onSubmit={handleSubmit(onSubmit)} noValidate>
			<Title theme={theme}>Welcome</Title>
			<Input type="email" theme={theme} placeholder="Email" {...register("email")} aria-invalid={errors.email ? "true" : "false"} />
			{errors.email && <Alert role="alert">{errors.email.message as string}</Alert>}
			<Input type="password" theme={theme} placeholder="Password" {...register("password")} aria-invalid={errors.password ? "true" : "false"} />
			{errors.password && <Alert role="alert">{errors.password.message as string}</Alert>}
			<SubmitButton theme={theme} type="submit" disabled={isLoading}>Login</SubmitButton>
		</Form>
	)
}
