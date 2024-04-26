import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PRoute = ({ children, reverse }) => {
  const user = useSelector((state) => state.user);
  if (!user.isAuth && !reverse) return <Navigate to="/auth" />;
  if (user.isAuth && reverse) return <Navigate to="/" />;
  return children;
};

export default PRoute;
