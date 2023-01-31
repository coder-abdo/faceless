import express, { json, urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import { errMiddleware } from "./middlewares/error.middleware";
import authRouter from "./routes/auth.route";
import usersRouter from "./routes/users.route";
import postsRouter from "./routes/posts.route";
dotenv.config();
const app = express();
app.use(json({ limit: "30mb" }));
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
const PORT = process.env.PORT ?? 4001;
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use(errMiddleware);
mongoose
	.connect(`${process.env.MONGO_URL}`)
	.then(() => {
		app.listen(PORT, () =>
			console.log(`server is running at http://localhost:${PORT}`)
		);
	})
	.catch((err) => console.log(err));
