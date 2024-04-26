import { useEffect, useState } from "react";
import { PiEyeClosedDuotone, PiEye } from "react-icons/pi";
import { Form, useActionData, useNavigate, useSubmit } from "react-router-dom";

import { supabase } from "../../lib/supabase";
import { useDispatch } from "react-redux";
import { fetchUserData, sendUserData } from "../../store/user-slice";

const AuthForm = ({ isLogin }) => {
  const [passVisible, setPassVisible] = useState(false);
  const passwordVisibleHandler = () => setPassVisible(!passVisible);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = useSubmit();
  const actiondata = useActionData();

  useEffect(() => {
    if (actiondata && actiondata.data) {
      if (actiondata.isLogin === "true") {
        dispatch(fetchUserData(actiondata.data.user.id));
        navigate("/");
      } else {
        dispatch(sendUserData(actiondata.data.user.id, actiondata.data.user.email));
        navigate("/user");
      }
    }
  }, [actiondata]);

  const submitFormHandler = () => {
    submit(null, { action: formAction });
  };

  return (
    <Form
      onSubmit={submitFormHandler}
      action="/auth"
      method="post"
      className="w-full flex flex-col gap-6 text-white"
    >
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
          name="email"
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
        type="submit"
        className={`${
          isLogin ? "bg-blue" : "bg-green"
        } font-kalameh text-4xl rounded-lg w-full py-2`}
      >
        {isLogin ? "ورود" : "ثبت نام"}
      </button>
      {actiondata && actiondata.error && (
        <p className="font-alibaba text-red-600">{actiondata.error}</p>
      )}
      <input name="islogin" type="hidden" defaultValue={isLogin} />
    </Form>
  );
};

export const formAction = async ({ request }) => {
  const userdata = await request.formData();
  const isLogin = userdata.get("islogin");

  const userform = {
    email: userdata.get("email"),
    password: userdata.get("password"),
  };

  if (isLogin === "true") {
    const { error, data } = await supabase.auth.signInWithPassword(userform);
    if (error) return { error: "خطا! اطلاعات وارد شده را بررسی کــنید و دوباره امتحان کــنید" };
    if (data) return { isLogin, data };
  } else {
    let { data, error } = await supabase.auth.signUp(userform);
    if (error) return { error: "خطا! اطلاعات وارد شده را بررسی کــنید و دوباره امتحان کــنید" };
    if (data) return { isLogin, data };
  }
};

export default AuthForm;
