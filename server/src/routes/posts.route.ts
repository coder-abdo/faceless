import { Router } from "express";
import {
  getFeedPosts,
  getUsersPosts,
  likePost,
} from "../controllers/posts.controller";
import { isAuthincated } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", isAuthincated);
router.get("/", isAuthincated, getFeedPosts);
router.get("/:id/posts", isAuthincated, getUsersPosts);
router.patch("/:id/like", isAuthincated, likePost);

export default router;
