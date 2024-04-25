import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../store/user-slice";

const InitAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("sb-dhqnztxmteoptdxbvbbl-auth-token"))
      dispatch(
        fetchUserData(
          JSON.parse(localStorage.getItem("sb-dhqnztxmteoptdxbvbbl-auth-token")).user.id
        )
      );
  }, []);
  return <></>;
};

export default InitAuth;
