import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../store/user-slice";
import estate_slice from "../../store/estate-slice";

const InitAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem("sb-dhqnztxmteoptdxbvbbl-auth-token"))
      dispatch(
        fetchUserData(
          JSON.parse(localStorage.getItem("sb-dhqnztxmteoptdxbvbbl-auth-token")).user.id
        )
      );
  }, [dispatch]);

  useEffect(() => {
    if (user.data) {
      dispatch(estate_slice.actions.setNewEstate(user.data.estate));
    }
  }, [user]);

  return <></>;
};

export default InitAuth;
