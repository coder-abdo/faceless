import { Nav } from "../../components/nav"
import Overlay from '../../components/overlay'
import { useFetchUser } from "../../hooks/useFetchUser"
import { useMenuToggle} from "../../store/store"
export const Home = () => {
	const { user, isLoading, error } = useFetchUser()
	const toggle = useMenuToggle(state => state.toggle)
	return <>
		{toggle && <Overlay />}
		<Nav user={user} />
	</>
}
