import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom'
type Props = RouteProps & {
	isSignedIn: boolean;
	children: JSX.Element
}
const Protected:React.FC<Props>= ({ isSignedIn, children }) => {
	if (!isSignedIn) {
		return <Navigate to="/" replace />
	}
	return children
}
export default Protected
