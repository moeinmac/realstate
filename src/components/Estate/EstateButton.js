import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { ImPencil2 } from "react-icons/im";
import { BsTrashFill } from "react-icons/bs";
import DeleteEstate from "./DeleteEstate";
import { Link } from "react-router-dom";

const EstateButton = ({estate_id}) => {
  const [showMenu, setShowMenu] = useState();
  const showMenuHandler = () => setShowMenu(!showMenu);

  const [confimDelete, setConfirmDelete] = useState();
  const confirmDeleteHandler = () => {
    setConfirmDelete(!confimDelete)
    setShowMenu(false)
  }
  return (
    <div className="relative">
      {!showMenu && (
        <button onClick={showMenuHandler}>
          <BsThreeDotsVertical className="text-2xl" />
        </button>
      )}
      {showMenu && (
        <div className="font-alibaba flex gap-1 items-end flex-col bg-blue p-2 rounded-lg absolute left-0 -top-4">
          <button onClick={showMenuHandler}>
            <CgClose className="text-2xl" />
          </button>
          <Link to={`/estate/${estate_id}/edit`} className="w-full flex items-center gap-3  justify-between">
            <ImPencil2 />
            <span>ویـرایش</span>
          </Link>
          <button onClick={confirmDeleteHandler} className="w-full flex items-center justify-between">
            <BsTrashFill />
            <span>حــــذف</span>
          </button>
        </div>
      )}
      {confimDelete && <DeleteEstate estate_id={estate_id} onClose={confirmDeleteHandler}/>}
    </div>
  );
};

export default EstateButton;
