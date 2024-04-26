import { useState } from "react";

const useUserMap = (text) => {
  const [data, setdata] = useState();
  const location = {
    data,
    setdata,
    text,
  };
  return location;
};

export default useUserMap;
