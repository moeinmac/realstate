import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal";
import { deleEstate } from "../../store/estate-slice";
import { useNavigate } from "react-router-dom";
import { removeFromArray } from "../../lib/removeFromArray";

const DeleteEstate = ({ onClose, estate_id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const estate = useSelector((state) => state.estate);

  const navigate = useNavigate();
  console.log(removeFromArray(estate.data, estate_id));

  const deleteEstateHandler = () => {
    dispatch(deleEstate(user.data.id, estate_id, estate.data));
    navigate("/");
  };
  return (
    <Modal className={"bg-black flex flex-col items-center gap-4"} onClose={onClose}>
      <h1 className="font-kalameh text-3xl">آیا میخواهید این ملک را حذف کــنید؟ </h1>
      <button
        onClick={deleteEstateHandler}
        className="bg-red-500 font-kalameh w-full rounded-lg text-2xl py-2"
      >
        بــله حذفش کــن
      </button>
      <button onClick={onClose} className="bg-green font-kalameh w-full rounded-lg text-2xl py-2">
        نــــــــه ولش کــن
      </button>
    </Modal>
  );
};

export default DeleteEstate;
