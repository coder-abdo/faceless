import { useThemeStore } from "../../context"
import { Alert, Form, Input, InputFile, NameConntrol, SubmitButton, Title } from "./style"
import { useValidate } from "../../hooks/useValidate"
import { signupSchema } from "../../utils"
import { useSignupMutation } from "../../hooks/useSignupMutation"
export const Signup = () => {
	const { theme } = useThemeStore() as any;
	const { register, handleSubmit, errors} = useValidate(signupSchema)
	const { onSubmit, isLoading} = useSignupMutation()
	
	return (
		<Form theme={theme} onSubmit={handleSubmit(onSubmit)} noValidate>
			<Title theme={theme}>Welcome</Title>
			<NameConntrol>
				<Input theme={theme} type="text" placeholder="Frist Name" data-firstname="firstname" {...register("firstName")} aria-invalid={errors.firstName ? "true" : "false"} />
				{errors.firstName && <Alert role="alert">{errors.firstName.message as string}</Alert>}
				<Input type="text" theme={theme} placeholder="Last Name" data-lastname="lastname" {...register("lastName")} aria-invalid={errors.lastName ? 'true' : 'false'} />
				{errors.lastName && <Alert role="alert">{errors.lastName.message as string}</Alert>}
			</NameConntrol>
			<Input theme={theme} type="text" placeholder="location"  {...register("location")} aria-invalid={errors.location ? "true" : "false"} />
			{errors.location && <Alert role="alert">{errors.location.message as string}</Alert>}
			<Input theme={theme} type="text" placeholder="occupation"  {...register("occupation")} aria-invalid={errors.occupation ? "true" : "false"} />
			{errors.occupation && <Alert role="alert">{errors.occupation.message as string}</Alert>}
			<InputFile type="file" accept="image/jpg, image/png, image/jpeg" {...register("picture")} />
			<Input type="email" theme={theme} placeholder="Email" {...register("email")} aria-invalid={errors.email ? "true" : "false"} />
			{errors.email && <Alert role="alert">{errors.email.message as string}</Alert>}
			<Input type="password" theme={theme} placeholder="Password" {...register("password")} aria-invalid={errors.password ? "true" : "false"} />
			{errors.password && <Alert role="alert">{errors.password.message as string}</Alert>}
			<SubmitButton theme={theme} type="submit" disabled={isLoading}>Register</SubmitButton>
		</Form>
	)
}
