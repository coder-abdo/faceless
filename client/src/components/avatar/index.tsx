import { AvatarContainer } from "./style";

type Props = {
	imageSrc: string;
}
export const Avatar: React.FC<Props> = ({ imageSrc }) => {
	return <AvatarContainer>
		<img src={imageSrc} alt="user image" />
	</AvatarContainer>

}
