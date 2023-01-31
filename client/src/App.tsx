import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginSingup } from "./pages/login"
import { Home } from "./pages/home"
import { Profile } from "./pages/profile"
import { GlobalStyle } from './components/styles/global'
import ProtectedRoute from './components/protectedRoutes'
import { useAuthStore, useThemeStore } from './context'
function App() {
	const { theme } = useThemeStore() as any;
	const { auth } = useAuthStore() as any;
	return (
		<Router>
			<GlobalStyle theme={theme} />
			<Routes>
				<Route path="/" element={<LoginSingup />} />
				<Route path="/home" element={
					<ProtectedRoute isSignedIn={auth.isAuthenticated}>
						<Home />
					</ProtectedRoute>
				}
				/>
				<Route path="/profile/:userId" element={
					<ProtectedRoute isSignedIn={auth.isAuthenticated}>
						<Profile />
					</ProtectedRoute>
				} />
			</Routes>
		</Router>
	)
}

export default App
