import { createGlobalStyle } from "styled-components";
type Props = {
	theme: 'dark' | 'light'
}
export const GlobalStyle = createGlobalStyle<Props>`
		html{
				font-size: 10px;
		}
		body{
			background:${props => props.theme === "dark" ? "#333" : "#fff"};
			color: ${props => props.theme === "dark" ? "#fff" : "#333"};
			transition-property: background-color, color;
			transition-duration: 0.3s;
		}	
		h1{
			font-size: 3rem;
		}
		h2{
			font-size: 2.5rem;
		}
		h3{
			font-size: 2rem;
		}
		h4{
			font-size: 1.8rem;
		}
		h5{
			font-size: 1.6rem;
		}
		h6{
			font-size: 1.4rem;
		}

`
