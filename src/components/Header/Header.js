import { useSelector } from "react-redux";
import Profile from "./Profile";
import { RiNotification2Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { RiUserReceived2Line } from "react-icons/ri";

const Header = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  if (location.pathname === "/auth") return;
  return (
    <header className="flex items-center px-6 py-4 justify-between border-b-2 border-zinc-700">
      {user.isAuth && (
        <>
          <Profile profile={user.data.profile} fullname={user.data.fullname} />
          <RiNotification2Fill className="text-3xl" />
        </>
      )}
      {!user.isAuth && (
        <>
          <div className="flex items-center gap-3">
            <FcHome className="text-5xl" />
            <h1 className="font-kalameh text-5xl">مـــتراژ</h1>
          </div>
          <Link to="/auth" className="font-alibaba flex items-center gap-1">
            ورود / ثبت نام <RiUserReceived2Line className="text-xl" />
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
