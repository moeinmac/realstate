import Profile from "./Profile";
import { RiNotification2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex items-center px-6 py-4 justify-between border-b-2 border-zinc-700">
      <Profile />
      <RiNotification2Fill className="text-3xl"/>
    </header>
  );
};

export default Header;
