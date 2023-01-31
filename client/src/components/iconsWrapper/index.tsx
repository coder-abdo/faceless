import React from "react";
import { BsMoon } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { MdHelp, MdMessage, MdNotifications } from "react-icons/md";
import { useThemeStore } from "../../context";
import { Icon, IconsWrapper } from "../styles/nav";

type Props = {
	isMobile?: boolean;
	isInAside?: boolean;
}
const icons = [<MdMessage />, <MdNotifications />, <MdHelp />]
export const NavIcons: React.FC<Props> = ({ isMobile, isInAside }) => {
	const { setTheme, theme } = useThemeStore() as any
	const toggleTheme = () => {
		setTheme((prev: 'dark' | 'light') => prev === "dark" ? "light" : "dark")
	}
	return (
		<IconsWrapper isMobile={isMobile} isInAside={isInAside}>
			<>
				{theme === "dark" ? <Icon onClick={toggleTheme} theme={theme} isInAside={isInAside}><BsMoon /></Icon> : <Icon onClick={toggleTheme} theme={theme} isInAside={isInAside}><FaSun /></Icon>}
				{icons.map((icon, idx) => (
					<Icon key={idx} theme={theme} isInAside={isInAside}>
						{icon}
					</Icon>
				))}
			</>
		</IconsWrapper>
	)
}
