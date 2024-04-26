import { Link, useNavigate } from "react-router-dom";
import { IoReturnUpBackOutline } from "react-icons/io5";
const BackButton = ({ path }) => {
  const navigate = useNavigate();

  return path ? (
    <Link to={path}>
      <IoReturnUpBackOutline className="text-4xl text-white" />
    </Link>
  ) : (
    <button onClick={() => navigate(-1)}>
      <IoReturnUpBackOutline className="text-4xl text-white" />
    </button>
  );
};

export default BackButton;
