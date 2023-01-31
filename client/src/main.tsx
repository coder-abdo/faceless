import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import App from './App'
import { AuthProvider, ThemeProvider } from './context'
import './index.css'
const client = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<AuthProvider>
				<QueryClientProvider client={client}>
					<ReactQueryDevtools />
					<App />
					</QueryClientProvider>
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>,
)
