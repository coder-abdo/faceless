import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'
type Decoded = JwtPayload & {
	id?: string
}
dotenv.config()
export const isAuthincated = async (req: Request | any, res: Response, next: NextFunction) => {
	const authHeader = req.headers && req.headers['access-token'] as string
	const token = authHeader && authHeader.split(' ')[1]
	try {
		if (!token) return res.status(403).json({ message: 'Access denied' })
		const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as Decoded
		req.id = decoded.id
		next()
	} catch (err) {
		next(err)
	}
}
