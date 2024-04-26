import { Form } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
import InputItem from "../UI/InputItem";

const AddEstateForm = () => {
  return <Form>
    <InputItem name={"estateName"}><IoPencil /></InputItem>
  </Form>;
};

export default AddEstateForm;
