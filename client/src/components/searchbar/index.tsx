import React from "react";
import { FaSearch } from "react-icons/fa";
import { useThemeStore } from "../../context";
import { SearchBar, SearchIcon, SearchInput } from "../styles/nav";

type Props = {}
export const NavSearchBar: React.FC<Props> = () => {
	const { theme } = useThemeStore()
	return (
		<SearchBar>
			<SearchInput theme={theme} />
			<SearchIcon theme={theme}>
				<FaSearch />
			</SearchIcon>
		</SearchBar>
	)
}
