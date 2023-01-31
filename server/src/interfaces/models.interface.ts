import { Document } from "mongoose";

export interface UserModel extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picture?: string;
  friends: any[];
  location: string;
  occupation: string;
  viewedProfile: number;
  imperssions: number;
}

export interface PostModel extends Document {
  userId: string;
  firstName: string;
  lastName: string;
  location?: string;
  description?: string;
  picturePath?: string;
  userPicturePath?: string;
  likes: Map<string, boolean>;
  comments: any[];
}
