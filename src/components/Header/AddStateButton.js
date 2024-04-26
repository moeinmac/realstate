import { Link } from "react-router-dom"
import { SlPlus } from "react-icons/sl";

const AddStateButton = () => {
  return <Link to={"/estate/add"} className="flex items-center font-alibaba gap-1 bg-green rounded-lg px-2 py-1">
    <SlPlus />
    <span>افزودن ملک</span>
  </Link>
}

export default AddStateButton