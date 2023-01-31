import { RequestHandler } from "express";
import { User } from "../models/user.model";

export const getUser: RequestHandler = async (req: any, res, next) => {
  try {
    const id = req.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "user is not existed" });
    return res.json({ user });
  } catch (err) {
    next(err);
  }
};
export const getUserFriends: RequestHandler = async (req:any, res, next) => {
  const  id  = req.id;
  try {
    const user = await User.findById(id);
    const friends = await Promise.all(
      user?.friends.map((id) => User.findById(id)) as any
    );
    const formattedFriends = friends.map((friend) => {
      const { _id, firstName, lastName, occupation, location, picturePath } =
        friend as any;
      return { _id, firstName, lastName, occupation, location, picturePath };
    });

    res.json({ friends: formattedFriends });
  } catch (err) {
    next(err);
  }
};
export const addRemoveFriend: RequestHandler = async (req, res, next) => {
  const { id, friendId } = req.params;
  try {
    const user = await User.findById(id);
    const friend = await User.findById(friendId);
    if (user?.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      if (friend?.friends) {
        friend.friends = friend?.friends.filter((id) => id !== id);
      }
    } else {
      user?.friends.push(friendId);
      friend!.friends.push(id);
    }
    await user?.save();
    await friend?.save();
    const friends = await Promise.all(
      user?.friends.map((id) => User.findById(id)) as any
    );
    const formattedFriends = friends.map((friend) => {
      const { _id, firstName, lastName, occupation, location, picturePath } =
        friend as any;
      return { _id, firstName, lastName, occupation, location, picturePath };
    });

    res.json({ friends: formattedFriends });
  } catch (err) {
    next(err);
  }
};
