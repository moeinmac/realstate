import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const Profile = ({ profile, fullname }) => {
  return (
    <Link to="/user" className="flex items-center gap-2">
      <div className="w-14 h-14">
        <img src={profile} alt="پرفایل" className="max-w-full rounded-full" />
      </div>
      <div className="font-alibaba">
        <p className="flex gap-1 items-center">
          <span>سلام</span>!<span>{fullname}</span>
        </p>
        <div className="flex items-center gap-1">
          <IoLocation />
          <p>تهران ، ایران</p>
        </div>
      </div>
    </Link>
  );
};

export default Profile;
