import { useDispatch, useSelector } from "react-redux";
import AccountItem from "../components/User/AccountItem";
import { TfiUser } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { Form, useActionData } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { fetchUserData } from "../store/user-slice";
import { useEffect } from "react";

const User = () => {
  const user = useSelector((state) => state.user);

  const actiondata = useActionData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (actiondata && actiondata.data) {
      dispatch(fetchUserData(user.data.id));
    }
  }, [actiondata]);

  return (
    <Form method="post" action="/user" className="flex px-6 flex-col gap-4">
      {!user.isCompleted && (
        <p className="text-center py-2 font-alibaba text-lg text-blue">
          اطلاعات حساب کــاربری شما کامل نیست
        </p>
      )}
      <h1 className="font-kalameh text-4xl py-2">
        {user.isCompleted ? "ویرایش حساب کــاربری" : "تکمیل حساب کــاربری"}
      </h1>
      <AccountItem dValue={user.data.fullname} name={"fullname"}>
        <TfiUser className="text-3xl text-black" />
      </AccountItem>

      <AccountItem dValue={user.data.email}>
        <TfiEmail className="text-3xl text-black" />
      </AccountItem>

      <AccountItem dValue={user.data.phone} name={"phone"}>
        <FiPhone className="text-3xl text-black" />
      </AccountItem>
      <button
        type="submit"
        className={`${
          user.isCompleted ? "bg-blue" : "bg-green"
        } font-kalameh text-4xl rounded-lg w-full py-2`}
      >
        ذخیره تغییرات
      </button>
      {actiondata && actiondata.error && (
        <p className="font-alibaba text-red-600">{actiondata.error}</p>
      )}
      <input type="hidden" defaultValue={user.data.id} name="id" />
    </Form>
  );
};

export const updateFormAction = async ({ request }) => {
  const userdata = await request.formData();
  const id = userdata.get("id");

  const userform = {
    phone: userdata.get("phone"),
    fullname: userdata.get("fullname"),
  };

  const { data, error } = await supabase
    .from("user")
    .update(userform)
    .eq("id", id)
    .select()
    .single();
  if (error) return { error: "خطا! اطلاعاتی که وارد کردید درست نیست ، لطفا دوباره امتحان کنید" };
  if (data) return { data };
};

export default User;
