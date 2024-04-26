import { Form } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import InputItem from "../UI/InputItem";
import UserMap from "../Location/UserMap"

const AddEstateForm = () => {
  return (
    <Form className="px-6 flex flex-col gap-4">
      <InputItem second pHolder={"نام ملک"} name={"estateName"}>
        <IoPencil />
      </InputItem>
      <InputItem second pHolder={"متراژ مـلک"} name={"estateArea"}>
        <TbRulerMeasure/>
      </InputItem>
      <UserMap text={"موقعیت مکانی ملک شما"} />
    </Form>
  );
};

export default AddEstateForm;
