import { Router } from "express";
import {
  addRemoveFriend,
  getUser,
  getUserFriends,
} from "../controllers/users.controller";
import { isAuthincated } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", isAuthincated, getUser);
router.get("/friends", isAuthincated, getUserFriends);
router.patch("/friendId", isAuthincated, addRemoveFriend);

export default router;
