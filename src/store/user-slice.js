import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../lib/supabase";

const initialState = {
  isAuth: false,
  data: [],
};

const user_slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isAuth = true;
      state.data = action.payload;
    },
  },
});

export const fetchUserData = (user_id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      let { data } = await supabase.from("user").select("*").eq("id", user_id).single();
      return { data };
    };
    try {
      const { data } = await fetchData();
      if (data) dispatch(user_slice.actions.setUser(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const user_action = user_slice.actions;
export default user_slice;
