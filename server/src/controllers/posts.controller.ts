import { RequestHandler } from "express";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";

export const createPost: RequestHandler = async (req, res, next) => {
  const { userId, description, picturePath } = req.body;
  try {
    const user = await User.findById(userId);
    const post = new Post({
      userId,
      firstName: user?.firstName,
      lastName: user?.lastName,
      location: user?.location,
      description,
      picturePath,
      userPicturePath: user?.picturePath,
      likes: new Map(),
      comments: [],
    });
    await post.save();
    res.json({ message: "successfully created post" });
  } catch (err) {
    next(err);
  }
};

export const getFeedPosts: RequestHandler = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    next(err);
  }
};
export const getUsersPosts: RequestHandler = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const posts = await Post.find({ userId });
    res.json(posts);
  } catch (err) {
    next(err);
  }
};
export const likePost: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const post = await Post.findById(id);
    const isLiked = post?.likes?.get(userId);
    if (isLiked) {
      post?.likes?.delete(userId);
    } else {
      post?.likes?.set(userId, true);
    }
    const updatedPost = await Post.findOneAndUpdate(
      { _id: id },
      { likes: post?.likes },
      { new: true }
    );
    res.json({ post: updatedPost });
  } catch (err) {
    next(err);
  }
};
