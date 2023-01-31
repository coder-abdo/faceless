import { Handler } from "express";
import { User } from "../models/user.model";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import {validationResult} from 'express-validator'
const register: Handler = async (req, res, next) => {
  const {
    email,
    firstName,
    lastName,
    password,
    picturePath,
    location,
    friends,
    occupation,
  } = req.body;
// check the inputs are valid or not
	const errors = validationResult(req)
	if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()})
  // if user is already exist
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    return res.status(401).json({ message: "email is already taken" });
  }
  // hash password
  const hashedPassword = await argon2.hash(password);

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      picturePath,
      location,
      friends,
      occupation,
      imperssions: ~~(Math.random() * 10000),
      viewedProfile: ~~(Math.random() * 10000),
    });
    await user.save();
    return res.json({ message: "successfully user created" });
  } catch (err) {
    next(err);
  }
};

const login: Handler = async(req, res, next) => {
		const {email, password} = req.body
// check the inputs are valid or not
	const errors = validationResult(req)
	if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()})
	try{
		const user = await User.findOne({email})
		// check if the user is existing or not
		if(!user) return res.status(404).json({message: "user is not existed"})
	// check if the passwords are matched
	const isMatchedPasswords = await argon2.verify(user.password, password)
	if(!isMatchedPasswords) return res.status(400).json({message: "email or password is incorrect"})
	// generate token
	const token = jwt.sign({id: user._id}, `${process.env.JWT_SECRET}`)
	return res.status(200).json({token, message: "successfully login"})
	}catch(err){
		next(err)
	}
};

export { register, login };
