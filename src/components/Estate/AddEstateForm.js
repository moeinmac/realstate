import { Form, useActionData } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";

import InputItem from "../UI/InputItem";
import UserMap from "../Location/UserMap";
import useUserMap from "../../hooks/useUserMap";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../../lib/supabase";
import { useEffect } from "react";
import { fetchEstateData } from "../../store/estate-slice";

const AddEstateForm = () => {
  const location = useUserMap("موقعیت مکانی ملک شما");

  const estate = useSelector((state) => state.estate);
  console.log(estate);
  
  const actiondata = useActionData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (actiondata && actiondata.esate_id) {
      dispatch(fetchEstateData(actiondata.user_id, actiondata.esate_id, estate.data));
    }
  }, [actiondata, dispatch]);

  return (
    <Form className="px-6 flex flex-col gap-4" method="post" action="/estate/add">
      <InputItem second pHolder={"نام ملک"} name={"title"}>
        <IoPencil />
      </InputItem>
      <InputItem second pHolder={"متراژ مـلک"} name={"area"}>
        <TbRulerMeasure />
      </InputItem>
      <div className="border-2 border-blue rounded-lg p-4">
        <div className="flex items-center gap-3 pb-4">
          <GrLocation />
          <p className="font-alibaba">موقعیت مکانی ملک</p>
        </div>
        <UserMap location={location} />
      </div>
      <button type="submit" className={"bg-blue font-kalameh text-4xl rounded-lg w-full py-2"}>
        ذخیره تغییرات
      </button>
      {actiondata && actiondata.error && (
        <p className="font-alibaba text-red-600">{actiondata.error}</p>
      )}
      <input
        type="hidden"
        defaultValue={`{"lat" : ${location.data ? location.data.lat : "0"} , "lng" : ${
          location.data ? location.data.lng : "0"
        }}`}
        name="location"
      />
    </Form>
  );
};

export const newEstateAction = async ({ request }) => {
  const userdata = await request.formData();

  const estateform = {
    id: Math.floor(100000 + Math.random() * 900000),
    title: userdata.get("title"),
    area: userdata.get("area"),
    location: JSON.parse(userdata.get("location")),
  };

  const { data, error } = await supabase.from("estate").insert(estateform).select().single();

  if (error) return { error: "خطا! اطلاعاتی که وارد کردید درست نیست ، لطفا دوباره امتحان کنید" };
  if (data) return { esate_id: data.id, user_id: data.owner };
};

export default AddEstateForm;
