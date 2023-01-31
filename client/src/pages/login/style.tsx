import styled from "styled-components";
type Props = {
	theme: "dark" | "light";
}
type TitleProps = Props & {
	isInLogo?: boolean;
}
export const Container = styled.main`
		display: flex;
		flex-direction: column;
		height: 100vh;
`
export const LoginLogo = styled.div`
	width: 100%;
	background-color: #333;
	color: #fff;
	display: flex;
	padding: 2rem 0;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`
export const Form = styled.form<Props>`
	max-width: 70rem;
	width: 100%;
	background-color: ${props => props.theme === "dark" ? "#fff" : "#333"};
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: center;
	flex-basis: 50%;
`
export const Title = styled.h1<TitleProps>`
	color: ${props => props.theme === "dark" ? "#333" : "#fff"};
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: ${props => props.isInLogo ? "0" : "2rem"};
`
export const Input = styled.input<Props>`
	flex: 1;
	padding: 1rem;
	border-radius: 3px;
	font-size: 1.8rem;
	max-height: 2.8rem;
	border: 1px solid;
	margin-bottom: 2rem;
	color: ${props => props.theme === "dark" ? "#fff" : "#333"};
	border-color: ${props => props.theme === "dark" ? "#fff" : "#333"};
	&:focus {
		outline: none;
		box-shadow: ${props => props.theme === "dark" ? "0 0 1rem rgba(255, 255,255, 0.15)" : "0 0 1rem rgba(0, 0, 0, 0.15)"};
	}
	::placeholder{
		color: "#ddd";
		font-size: 1.8rem;
	}
	&[data-firstname]{
		margin-bottom: 0;
		@media(max-width: 768px){
			margin-bottom: 2rem;
		}
	}
&[data-lastname]{
		margin-bottom: 0;
		@media(max-width: 768px){
			margin-bottom: 2rem;
		}
	}
`
export const NameConntrol = styled.div`
	display: flex;
	flex-gap: 1rem;
	margin-bottom: 2rem;
	gap: 1rem;
	@media(max-width: 768px){
		flex-direction: column;
		margin-bottom: 0;
	}
`
export const SubmitButton = styled.button<Props>`
		width: 100%;
		padding: 1rem 2rem;
		font-size: 1.8rem;
		background-color: ${props => props.theme === "dark" ? "#333" : "#fff"};
		border: 1px solid;
		border-color: ${props => props.theme === "dark" ? "#fff" : "#333"};
		color:${props => props.theme === "dark" ? "#fff" : "#333"}; 
		border-radius: 3px;
		transition-property: background-color, color, border-color;
		transition-duration: 0.3s;
		transition-timing-function: ease-in-out;
		&:hover{
		cursor: pointer;
			background-color: transparent;
			color:${props => props.theme === "dark" ? "#333" : "#fff"}; 
			border-color:${props => props.theme === "dark" ? "#333" : "#fff"}; 
		}
`
export const Alert = styled.p`
		font-size: 1.8rem;
		margin: 1rem 0;
		color: #f00;
`
export const HaveAnAccount = styled.p`
		color: ${props => props.theme === "dark" ? "#fff" : "#333"};
		font-size: 1.8rem;	
		margin-top: 1.5rem;
		max-width: 70rem;
		width: 100%;
		align-self: center;
		&:hover{
			cursor: pointer;
			text-decoration: underline;
		}
`
export const InputFile = styled.input`
::file-selector-button {
    font-weight: bold;
		font-size: 1.8rem;
    color: #333;
    padding: 1rem 2rem;
    border: 1px solid grey;
    border-radius: 3px;
		margin-bottom: 2rem;
		cursor: pointer;
		width: 100%;

}

`
