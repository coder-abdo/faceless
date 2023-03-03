import { Suspense } from "react";
import { Nav } from "../../components/nav";
import Overlay from "../../components/overlay";
import { UserStatus } from "../../components/userWidget";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useMenuToggle } from "../../store/store";
import { TUser } from "../../types";
export const Home = () => {
  const { user } = useFetchUser();
  const toggle = useMenuToggle((state) => state.toggle);
  return (
    <Suspense fallback={<div>loading....</div>}>
      {toggle && <Overlay />}
      <Nav user={user} />
      <main>
        <UserStatus user={user as TUser} />
      </main>
    </Suspense>
  );
};
