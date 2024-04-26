import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { ImPencil2 } from "react-icons/im";
import { BsTrashFill } from "react-icons/bs";

const EstateButton = () => {
  const [showMenu, setShowMenu] = useState();
  const showMenuHandler = () => setShowMenu(!showMenu);

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
          <div className="w-full flex items-center gap-3  justify-between">
            <ImPencil2 />
            <span>ویـرایش</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <BsTrashFill />
            <span>حــــذف</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EstateButton;
