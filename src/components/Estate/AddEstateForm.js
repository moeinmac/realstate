// Could Be Cleaner #fix_later

import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { BiDetail } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";

import InputItem from "../UI/InputItem";
import UserMap from "../Location/UserMap";
import useUserMap from "../../hooks/useUserMap";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../../lib/supabase";
import { useEffect } from "react";
import { fetchEstateData } from "../../store/estate-slice";

const AddEstateForm = ({ data }) => {
  const location = useUserMap("موقعیت مکانی ملک شما");

  useEffect(() => {
    if (data) location.setdata(data.location);
  }, []);

  const estate = useSelector((state) => state.estate);
  const navigate = useNavigate();

  const actiondata = useActionData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (actiondata && actiondata.esate_id) {
      dispatch(fetchEstateData(actiondata.user_id, actiondata.esate_id, estate.data));
      navigate(`/estate/${actiondata.esate_id}`);
    }
  }, [actiondata, dispatch]);

  return (
    <Form
      className="px-6 flex flex-col gap-4"
      method="post"
      action={`${data ? `/estate/${data.id}/edit` : "/estate/add"}`}
    >
      <InputItem second dValue={data ? data.title : null} pHolder={"نام ملک"} name={"title"}>
        <IoPencil />
      </InputItem>
      <InputItem second dValue={data ? data.area : null} pHolder={"متراژ مـلک"} name={"area"}>
        <TbRulerMeasure />
      </InputItem>
      <InputItem
        second
        dValue={data ? data.description : null}
        pHolder={"توضیحات"}
        name={"description"}
      >
        <BiDetail />
      </InputItem>
      <InputItem second dValue={data ? data.address : null} pHolder={"نشانی"} name={"address"}>
        <GrLocation />
      </InputItem>
      <div className="border-2 border-blue rounded-lg p-4">
        <div className="flex items-center gap-3 pb-4">
          <BiCurrentLocation />
          <p className="font-alibaba">موقعیت مکانی ملک</p>
        </div>
        <UserMap location={location} initLocation={data ? data.location : null} />
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
      {data && <input type="hidden" defaultValue={data.id} name="id" />}
    </Form>
  );
};

export const editEstateAction = async ({ request }) => {
  const userdata = await request.formData();
  const id = userdata.get("id");

  const estateform = {
    title: userdata.get("title"),
    area: userdata.get("area"),
    address: userdata.get("address"),
    description: userdata.get("description"),
    location: JSON.parse(userdata.get("location")),
  };

  const { error } = await supabase.from("estate").update(estateform).eq("id", id);

  if (error) return { error: "خطا! اطلاعاتی که وارد کردید درست نیست ، لطفا دوباره امتحان کنید" };
  return redirect(`/estate/${id}`);
};

export const newEstateAction = async ({ request }) => {
  const userdata = await request.formData();

  const estateform = {
    id: Math.floor(100000 + Math.random() * 900000),
    title: userdata.get("title"),
    area: userdata.get("area"),
    address: userdata.get("address"),
    description: userdata.get("description"),
    location: JSON.parse(userdata.get("location")),
  };

  const { data, error } = await supabase.from("estate").insert(estateform).select().single();

  if (error) return { error: "خطا! اطلاعاتی که وارد کردید درست نیست ، لطفا دوباره امتحان کنید" };
  if (data) return { esate_id: data.id, user_id: data.owner };
};

export default AddEstateForm;
