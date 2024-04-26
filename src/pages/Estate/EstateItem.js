import { useLoaderData } from "react-router-dom";
import { ImUserTie } from "react-icons/im";
import { TbRulerMeasure } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";

import { persianNumbers } from "../../lib/persianNumbers";
import { timeSince } from "../../lib/timeSince";
import { BiCurrentLocation } from "react-icons/bi";
import UserMap from "../../components/Location/UserMap";
import { useState } from "react";
import { useSelector } from "react-redux";
import EstateButton from "../../components/Estate/EstateButton";
import { supabase } from "../../lib/supabase";
import EstatePhone from "./EstatePhone";

const EstateItem = () => {
  const response = useLoaderData();
  const [showNumber, setShowNumber] = useState(false);
  const showNumberHandler = () => setShowNumber(!showNumber);
  const user = useSelector((state) => state.user);

  if (response.error) {
    return <h1>همچــنین ملکـــی وجود ندارد!</h1>;
  }

  const data = response.data;

  return (
    <>
      <div className="md:grid md:grid-cols-2 md:text-xl flex flex-col">
        <header className="md:mt-8 place-self-center">
          <div>
            <img src={data.photo} className="max-w-full md:rounded-t-lg rounded-b-lg" />
          </div>
          <div className="px-6 py-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h1 className="font-kalameh text-4xl">{data.title}</h1>
              {user.data.id === data.owner && <EstateButton estate_id={data.id} />}
            </div>
            <div className="flex items-center justify-between px-2 font-alibaba text-gray">
              <div className="flex items-center gap-2">
                <ImUserTie className="bg-green text-white text-2xl p-1 rounded-full" />
                <p>{data.user.fullname}</p>
              </div>
              <p>{timeSince(data.created_at)}</p>
            </div>
          </div>
        </header>
        <article className="md:mt-8 flex flex-col gap-4 px-6">
          <div className="flex items-center gap-2">
            <h3 className="font-kalameh text-2xl flex items-center gap-1">
              <TbRulerMeasure />
              مــتراژ :
            </h3>
            <span className="font-alibaba">{persianNumbers(data.area)}</span>
          </div>
          <div className={`flex gap-2 ${data.description ? "flex-col" : ""}`}>
            <h3 className="font-kalameh text-2xl flex items-center gap-1">
              <BiDetail />
              توضیحات :
            </h3>
            <p className="font-alibaba">
              {data.description ? data.description : "توضحیاتی جهت نمایش وجود ندارد"}
            </p>
          </div>

          <div className={`flex gap-2 ${data.address ? "flex-col" : ""}`}>
            <h3 className="font-kalameh text-2xl flex-start flex  gap-1">
              <IoLocation />
              <span>نشانی : </span>
            </h3>
            <p className="font-alibaba">{data.address}</p>
          </div>
          <div className="sm:hidden md:flex md:pb-4 md:pt-4">
            <EstatePhone
              onClick={showNumberHandler}
              showNumber={showNumber}
              isAuth={user.isAuth}
              phone={data.user.phone}
            />
          </div>
        </article>
      </div>
      <div className="flex gap-2 py-4 flex-col px-6">
        <h3 className="font-kalameh text-2xl flex items-center gap-1">
          <BiCurrentLocation />
          موقعیت مکـانی :
        </h3>
        <div className="relative">
          <UserMap initLocation={data.location} />
        </div>
      </div>
      <div className="md:hidden flex px-6 pb-4">
        <EstatePhone
          onClick={showNumberHandler}
          showNumber={showNumber}
          isAuth={user.isAuth}
          phone={data.user.phone}
        />
      </div>
    </>
  );
};

export const fetchEstate = async (id) => {
  return await supabase.from("estate").select("*, user(phone,fullname)").eq("id", id).single();
};

export default EstateItem;
