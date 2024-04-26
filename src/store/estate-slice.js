import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../lib/supabase";
import { removeFromArray } from "../lib/removeFromArray";

const initialState = {
  data: [],
};

const estate_slice = createSlice({
  name: "estate",
  initialState,
  reducers: {
    setNewEstate(state, action) {
      state.data = action.payload;
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
      dispatch(estate_slice.actions.setNewEstate([...lastEstates, estate_id]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteEstate = (user_id, estate_id, lastEstates) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const { error } = await supabase.from("estate").delete().eq("id", estate_id);
      const { data } = await supabase
        .from("user")
        .update({ estate: removeFromArray(lastEstates, estate_id) })
        .eq("id", user_id);
      return { data, error };
    };
    try {
      await fetchData();
      dispatch(estate_slice.actions.setNewEstate(removeFromArray(lastEstates, estate_id)));
    } catch (error) {
      console.log(error);
    }
  };
};

export const estate_actions = estate_slice.actions;
export default estate_slice;
