import React, { createContext } from "react";

import { AuthContextType, ThemeContextType } from "../types";


const AuthContext = createContext<AuthContextType>(null)
type Props = {
	children?: React.ReactNode
}
const storageAuth = sessionStorage.getItem("auth");
const getSavedData = JSON.parse(storageAuth!);
export const AuthProvider: React.FC<Props> = ({ children }) => {
	const [auth, setAuth] = React.useState<{token: string | null, isAuthenticated: boolean}>({ token:getSavedData?.token ?? null, isAuthenticated: getSavedData?.isAuthenticated ?? false })
	return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}
export const useAuthStore = () => React.useContext(AuthContext)
const ThemeContext = createContext<ThemeContextType>(null)

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = React.useState<{ theme: 'dark' | 'light' }>({ theme: 'light' })
	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
export const useThemeStore = () => React.useContext(ThemeContext)
