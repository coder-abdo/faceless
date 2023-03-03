import React from "react";
export type TUser = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  picturePath?: string;
  friends: any[];
  location?: string;
  occupation?: string;
  viewedProfile?: number;
  imperssions?: number;
};
export type LoginDto = Pick<TUser, "email"> & {
  password: string;
};
export type SignupDto = Omit<
  TUser,
  "_id" | "friends" | "viewedProfile" | "imperssions"
> & {
  password: string;
};

export type TPost = {
  userId?: string;
  firstName: string;
  lastName: string;
  location?: string;
  description?: string;
  picturePath?: string;
  userPicturePath?: string;
  likes: Map<string, boolean>;
  comments: string[];
};
type Auth = {
  token: string | null;
  isAuthenticated: boolean;
};

type Theme = {
  theme: "light" | "dark";
};
export type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
} | null;
export type AuthContextType = {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
} | null;
