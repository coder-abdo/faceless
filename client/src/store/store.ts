import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { TUser } from '../types';
type userStore = {
	user: TUser | null;
	setUser: (user: TUser) => void;
}
export const useUserStore = create<userStore>()(
	devtools(persist(immer(
		(set) => ({
			user: null,
			setUser: (user) => set((state) => {
				state.user = user
			})
		})
	)))
)
type uiToggle = {
	toggle: boolean;
	setToggle: (toggle: boolean) => void;
}
export const useMenuToggle = create<uiToggle>()(
	immer((set) => ({
		toggle: false,
		setToggle: (isToggle) => set((state) => {
			state.toggle = isToggle;
		})
	}))
)
type navigateToLogin = {
	isSuccessToNavigate: boolean;
	setIsSuccessToNavigate: (isSuccess: boolean) => void;
}
export const useNavigateToLogin = create<navigateToLogin>()(
	immer((set) => ({
		isSuccessToNavigate: false,
		setIsSuccessToNavigate: (isSuccess: boolean) => set((state) => {
			state.isSuccessToNavigate = isSuccess;
		})
	}))
)
