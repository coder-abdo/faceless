import { Router } from "express";
import { body } from 'express-validator'
import { login, register } from "../controllers/auth.controller";

const router = Router();

router.post("/register", body('firstName').isString(), body('email').isEmail(),
	body('lastName').isString(),
	body('password').isString().isLength({ min: 6 }),
	body('picturePath').isString(),
	body('location').isString(),
	body('occupation').isString(), register);
router.post("/login", login);

export default router;
