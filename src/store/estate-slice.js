import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../lib/supabase";

const initialState = {
  data: [],
};

const estate_slice = createSlice({
  name: "estate",
  initialState,
  reducers: {
    setNewEstate(state, action) {
      state.data = [...state.data, action.payload];
    },
  },
});

export const fetchEstateData = (user_id, estate_id, lastEstates) => {
  return async (dispatch) => {
    const fetchData = async () => {
      let { data } = await supabase
        .from("user")
        .update({ estate: [...lastEstates, estate_id] })
        .eq("id", user_id)
        .single();
      return { data };
    };
    try {
      await fetchData();
      dispatch(estate_slice.actions.setNewEstate(estate_id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const estate_actions = estate_slice.actions;
export default estate_slice;
