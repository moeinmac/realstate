import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import AddEstateForm from "../../components/Estate/AddEstateForm";

const EditEstate = () => {
  const response = useLoaderData();
  const user = useSelector((state) => state.user);
  if (response.error)
    return (
      <h1 className="px-6 py-4 font-kalameh text-5xl">
        همچنین ملکی وجود ندارید و یا قبلا پاک شده!
      </h1>
    );
  if (user.data.id !== response.data.owner)
    return (
      <h1 className="px-6 py-4 font-kalameh text-5xl">
        شما اجازه ویرایش این ملک را ندارید ، زیرا صاحب آن نیستید
      </h1>
    );
  return (
    <>
      <h1 className="font-kalameh text-blue text-4xl px-6 py-4">ویرایــش مــلک</h1>
      <AddEstateForm data={response.data} />
    </>
  );
};

export default EditEstate;
