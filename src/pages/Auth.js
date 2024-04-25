import { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const authTypeHandler = () => {
    setIsLogin(!isLogin);
  };

  

  const [searchParams, setSearchParams] = useSearchParams();
  if(searchParams.get("success")){
    
  }

  return (
    <main className="flex flex-col px-8 py-4 gap-14">
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col gap-y-5">
          {isLogin && (
            <h1 className="font-alibaba text-3xl text-white">
              وارد حــساب
              <strong className="text-blue font-kalameh text-5xl"> مــــتراژ </strong>
              خود شــوید
            </h1>
          )}
          {!isLogin && (
            <h1 className="font-alibaba text-3xl text-white">
              بـــه
              <strong className="text-green font-kalameh text-5xl"> مــــــتراژ </strong>
              خــوش آمـــــدید!
            </h1>
          )}
          <AuthForm isLogin={isLogin} />
        </div>
      </div>
      <div className="font-alibaba flex flex-col gap-3">
        {isLogin && <p>هنوز تو مـــتراژ حساب نداری؟ منتظر چی هستی پس؟</p>}
        {!isLogin && <p>توی مــــتراژ حساب داری؟</p>}
        <button
          className={`${isLogin ? "bg-green " : "bg-blue"} rounded-lg py-2`}
          onClick={authTypeHandler}
        >
          {isLogin ? "همین الان ثبت نام کن" : "میخوام وارد حسابم بشم"}
        </button>
      </div>
    </main>
  );
};

export default Auth;
