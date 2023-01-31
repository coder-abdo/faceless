import styled from "styled-components";
type Props = { theme: 'light' | 'dark', isInAside?: boolean };
type MobileScreen = {
	isMobile?: boolean;
	isInAside?: boolean;
}
export const Navbar = styled.nav`
		padding: 1.6rem 6%;
		display: flex;
		justify-content: space-around;
		align-items: center;
`
export const LogoWrapper = styled.div`
		display: flex;
		align-items: center;
`
export const Logo = styled.h2`
	font-size: clamp(1.6rem, 3.2rem, 4rem);	
	margin-right: 2rem;
	color: skyblue;
`
export const SearchBar = styled.div`
		max-width: 40rem;
		width: 100%;
		position: relative;
		color: ${props => props.theme === 'dark' ? '#fff' : '#333'};
`
export const SearchInput = styled.input<Props>`
		width: 100%;
		height: 3rem;
		border-radius: 3px;
		font-size: 1.8rem;
		background-color:${props => props.theme === 'dark' ? '#eee' : '#fff'};
		border: 1px solid;
		borderColor: ${props => props.theme === 'dark' ? '#fff' : '#333'};
		outline: none;
		indent: 0.5rem;
		transition: border-color 0.3s;
		:focus{
			box-shadow: 0 0 1rem 0 rgba(0,0,0, 0.15);
			border-color: skyblue;
		}
`
export const Icon = styled.span<Props>`
	font-size: 2rem;	
	margin-right: 2rem;
	color: ${props => props.theme === 'dark' ? '#fff' : props.isInAside ? "#fff" : '#333'};
	&:first-child{
		margin-left: ${props => props.isInAside ? "0px" : "2rem"};
	}
	:hover{
		cursor: pointer;
	}
`
export const SearchIcon = styled(Icon) <Props>`
	position: absolute;		
	right: 0;
	margin-right:0 ;
	top: 50%;
	transform: translateY(-50%);
	color: ${props => props.theme === "dark" ? "#fff" : "#333"};
	:hover{
		cursor: pointer;
	}
`
export const IconsWrapper = styled.div<MobileScreen>`
		display: flex;
		flex-direction: ${props => props.isMobile ? 'column' : 'row'};
		justify-content: ${props => props.isInAside ? "space-around" : "flex-start"};
		flex-basis: ${props => props.isInAside ? "70%" : ""};
`
export const UserOptions = styled.ul<Props>`
display: flex;
flex-direction: ${props => props.isInAside ? "column" : "row"};
	border-radius: 3px;
	border: 1px solid;
	border-color: ${props => props.theme === "dark" ? "#fff" : "#333"};
	background-color: ${props => props.theme === "dark" ? "#fff" : props.isInAside ? "#fff" : "#333"};
	color: ${props => props.theme === "dark" ? "#333" : props.isInAside ? "#333" : "#fff"};
`
export const Option = styled.li<Props>`
	font-size: 1.8rem;
	padding: 1rem 2rem;
	cursor: pointer;
	&:first-child{
		border-bottom: ${props => props.isInAside ? "1px solid" : "none"};
		border-color: ${props => props.theme === "dark" ? "#fff" : props.isInAside ? "#333" : "#333"};
	}
`
export const Menu = styled.div<MobileScreen>`
		display: ${props => props.isMobile ? "none" : "flex"};
		align-items: center;
`
export const MenuInMobile = styled.div<{ isToggled?: boolean }>`
		display: ${props => props.isToggled ? "flex" : "none"};
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #333;
		bottom 0;
		right: 0;
		height: 100%;
		max-width: 30rem;
		min-width: 25rem;
		width: 100%;
		flex-direction:column;
		justify-content: space-around;
		align-items: center;
`
export const HamburgerMenuInMobile = styled(Icon)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	margin-right: 0;
	z-index: 15;
	cursor: pointer;
`
