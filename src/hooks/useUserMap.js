import { useState } from "react";

const useUserMap = ({ text }) => {
  const [location, setLocation] = useState({});
  return {
    location,
    setLocation,
    text,
  };
};

export default useUserMap;
