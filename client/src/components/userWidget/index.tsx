import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { useThemeStore } from "../../context";
import { TUser } from "../../types";
import {
  AddIcon,
  Divider,
  Icon,
  UserAvatar,
  UserFriendsNums,
  UserImageAndInfoContainer,
  UserLocationOrOccupaion,
  UserName,
  UserNameAndFriendsNums,
  UserOccupation,
  UserProfile,
  UserWidget,
} from "./style";
type Props = {
  user: TUser;
};
export const UserStatus: React.FC<Props> = React.memo(({ user }) => {
  const state = useThemeStore() as any;
  return (
    <UserWidget>
      <UserProfile theme={state.theme}>
        <UserImageAndInfoContainer>
          <UserAvatar src={user.picturePath} alt={user.firstName} />
          <UserNameAndFriendsNums theme={state.theme}>
            <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
            <UserFriendsNums>{user.friends.length} friends</UserFriendsNums>
          </UserNameAndFriendsNums>
        </UserImageAndInfoContainer>
        <AddIcon>
          <FaUserPlus />
        </AddIcon>
      </UserProfile>
      <Divider theme={state.theme} />
      <div>
        <UserLocationOrOccupaion>
          <Icon>
            <GrLocation />
          </Icon>
          <h4>{user.location}</h4>
        </UserLocationOrOccupaion>
        <UserLocationOrOccupaion>
          <Icon>
            <BsBriefcase />
          </Icon>
          <h4>{user.occupation}</h4>
        </UserLocationOrOccupaion>
      </div>
      <Divider />
    </UserWidget>
  );
});
