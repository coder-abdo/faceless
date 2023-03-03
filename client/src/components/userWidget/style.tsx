import styled from "styled-components";
type ThemeProps = {
  theme: "light" | "dark";
};
const UserWidget = styled.aside`
  max-width: 30rem;
  width: 100%;
  border-radius: 1rem;
  padding: 2rem 1rem;
`;
const Divider = styled.div<ThemeProps>`
  height: 1px;
  background-color: ${(props) => (props.theme === "dark" ? "#eee" : "#ddd")};
  margin: 1rem 0;
`;
const UserProfile = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => (props.theme === "dark" ? "#eee" : "#333")};
`;
const UserImageAndInfoContainer = styled.div`
  display: flex;
`;
const UserName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
`;
const UserFriendsNums = styled.h4`
  font-size: 1.8rem;
  font-weight: 400;
`;
const UserNameAndFriendsNums = styled.div<ThemeProps>`
  color: ${(props) => (props.theme === "dark" ? "#eee" : "#333")};
  text-transform: capitalize;
`;
const AddIcon = styled.span`
  color: inherit;
  font-size: 2rem;
`;
const UserAvatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 1rem;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserLocationOrOccupaion = styled.div<ThemeProps>`
  display: flex;
  color: ${(props) => (props.theme === "dark" ? "#eee" : "#333")};
  margin-bottom: 1rem;
  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    color: inherit;
  }
`;
const Icon = styled.span`
  color: inherit;
  font-size: 2rem;
  margin-right: 1rem;
`;

export {
  UserWidget,
  Divider,
  UserAvatar,
  UserLocationOrOccupaion,
  UserInfo,
  Icon,
  AddIcon,
  UserProfile,
  UserFriendsNums,
  UserName,
  UserNameAndFriendsNums,
  UserImageAndInfoContainer,
};
