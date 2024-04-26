import { BsTelephone } from "react-icons/bs";

const EstatePhone = ({onClick,showNumber,isAuth , phone}) => {
  return (
    <button
      onClick={onClick}
      className="font-kalameh text-4xl w-full flex  flex-col items-center bg-blue py-3  rounded-lg"
    >
      <div className="flex items-center gap-3">
        {!showNumber && <BsTelephone />}
        {!showNumber
          ? "شمــاره تـــماس"
          : isAuth
          ? phone
          : "ابتدا وارد  حساب تان شوید"}
      </div>
    </button>
  );
};

export default EstatePhone