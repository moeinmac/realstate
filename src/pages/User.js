import { useDispatch } from "react-redux";
import UserForm from "../components/User/UserForm";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../store/user-slice";

const User = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const signoutHandler = () => {
    dispatch(signOutUser())
    navigate("/");
  };
  return (
    <>
      <UserForm />
      <div className="flex">
        <button
          className="font-kalameh w-full text-4xl rounded-lg py-2 bg-red-500 mx-6 mt-6"
          onClick={signoutHandler}
        >
          خروج از حساب
        </button>
      </div>
    </>
  );
};

export default User;
