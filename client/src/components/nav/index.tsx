import React, { memo } from "react"
import { FaBars } from "react-icons/fa"
import { IoMdClose } from 'react-icons/io'
import { Link, useNavigate } from "react-router-dom"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { HamburgerMenuInMobile, Icon, Logo, LogoWrapper, Menu, MenuInMobile, Navbar, Option, UserOptions } from "../styles/nav"
import { NavSearchBar } from "../searchbar"
import { NavIcons } from "../iconsWrapper"
import { useAuthStore } from "../../context"
import { useMenuToggle } from "../../store/store"
import { TUser } from "../../types"
type Props = {
	user:TUser|null
}
export const Nav: React.FC<Props> = memo(({user}) => {
	const toggle = useMenuToggle(state => state.toggle)
	const setToggle = useMenuToggle(state => state.setToggle);
	const navigate = useNavigate()
	const { setAuth } = useAuthStore() as any
	const isMobile = useMediaQuery('(max-width:768px)')
	const handleSignout = () => {
		setAuth({ isAuthenticated: false, token: null })
		navigate('/')
	}
	const handleNavigateToProfile = () => {
		navigate("/profile/2")
	}

	React.useEffect(() => {
		if (!isMobile) {
			setToggle(false)
		}
	}, [isMobile])
	return <Navbar>
		<LogoWrapper>
			<Logo>FaceLess</Logo>
			{!isMobile && <NavSearchBar />}
		</LogoWrapper>
		<Menu isMobile={isMobile}>
			<NavIcons />
			<UserOptions>
				<Option onClick={handleNavigateToProfile}>{user?.firstName}</Option>
				<Option onClick={handleSignout}>
					Logout
				</Option>
			</UserOptions>
		</Menu>
		{isMobile &&
			<>
				{toggle ? <HamburgerMenuInMobile isInAside onClick={() => setToggle(false)}>
					<IoMdClose />
				</HamburgerMenuInMobile> : <FaBars style={{
					fontSize: "2rem",
					cursor: "pointer",
				}} onClick={() => setToggle(true)} />}
				<MenuInMobile isToggled={toggle}>
					<NavIcons isMobile={isMobile} isInAside />
					<UserOptions isInAside>
						<Option onClick={handleNavigateToProfile}>{user?.firstName}</Option>
						<Option onClick={handleSignout}>
							Logout
						</Option>
					</UserOptions>
				</MenuInMobile>
			</>
		}
	</Navbar>
})
