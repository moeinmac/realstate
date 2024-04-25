import { useState } from "react";
import { PiEyeClosedDuotone, PiEye } from "react-icons/pi";

const AuthForm = ({ isLogin }) => {
  const [passVisible, setPassVisible] = useState(false);
  const passwordVisibleHandler = () => setPassVisible(!passVisible);

  return (
    <form className="w-full flex flex-col gap-6 text-white">
      <label htmlFor="username" className="text-sm font-alibaba">
        ایمیل
        <input
          id="username"
          required
          className={`w-full ${
            isLogin ? "bg-[#97b2eb]" : "bg-[#658364]"
          } text-black font-alibaba text-xl outline-0 border-0 px-4 py-3 rounded-xl mt-2`}
          type="text"
          dir="ltr"
          name="username"
        />
      </label>
      <label htmlFor="password" className="text-sm font-alibaba relative">
        رمز عبور
        <input
          required
          name="password"
          id="password"
          dir="ltr"
          className={`w-full  ${
            isLogin ? "bg-[#97b2eb]" : "bg-[#658364]"
          } text-black font-alibaba text-xl outline-0 border-0 px-4 py-3 rounded-xl mt-2`}
          type={passVisible ? "text" : "password"}
        />
        {!passVisible && (
          <PiEye
            className="text-3xl absolute right-4 top-10 text-black"
            onClick={passwordVisibleHandler}
          />
        )}
        {passVisible && (
          <PiEyeClosedDuotone
            className="text-3xl text-black absolute right-4 top-10"
            onClick={passwordVisibleHandler}
          />
        )}
      </label>
      <button
        className={`${
          isLogin ? "bg-blue" : "bg-green"
        } font-kalameh text-4xl rounded-lg w-full py-2`}
      >
        {isLogin ? "ورود" : "ثبت نام"}
      </button>
    </form>
  );
};

export default AuthForm;
