import { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";

const Auth = () => {
  const [isLogin,setIsLogin] = useState(true);

  return (
    <main>
      <div className="p-8 w-full flex flex-col h-screen justify-between">
        <div className="flex flex-col gap-y-5">
          <h1 className="font-alibaba text-3xl text-white">
            وارد حــساب
            <strong className={`${isLogin ? "text-blue" : "text-green"} font-kalameh text-5xl`}> مــــتراژ </strong>
            خود شــوید
          </h1>
          <AuthForm isLogin={isLogin}/>
        </div>
      </div>
    </main>
  );
};

export default Auth;
