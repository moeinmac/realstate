import { useState } from "react";
import { PiEyeClosedDuotone, PiEye } from "react-icons/pi";
import { Form, redirect, useSubmit } from "react-router-dom";

import { supabase } from "../../lib/supabase";

const AuthForm = ({ isLogin }) => {
  const [passVisible, setPassVisible] = useState(false);
  const passwordVisibleHandler = () => setPassVisible(!passVisible);

  const submit = useSubmit();

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
    </Form>
  );
};

export const formAction = async ({ request }) => {
  const userdata = await request.formData();
  const userform = {
    email: userdata.get("email"),
    password: userdata.get("password"),
  };
  const { data, error } = await supabase.auth.signInWithPassword(userform);
  console.log(data);
  return redirect("/");
};

export default AuthForm;
