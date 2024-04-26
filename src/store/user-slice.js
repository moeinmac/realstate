import { createSlice } from "@reduxjs/toolkit";
import { supabase } from "../lib/supabase";

const initialState = {
  isAuth: false,
  data: [],
  isCompleted: false,
};

const user_slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isAuth = true;
      state.data = action.payload;
      state.isCompleted = action.payload.fullname && action.payload.phone;
    },
    deleteUser(state) {
      state.isAuth = false;
      state.data = [];
      state.isCompleted = false;
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

export const sendUserData = (id, email) => {
  const randomid = Math.floor(Math.random() * 5) + 1;
  const PROFILE_URL = `https://dhqnztxmteoptdxbvbbl.supabase.co/storage/v1/object/public/profile/sample/${randomid}.jpg`;
  return async (dispatch) => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("user")
        .insert({ id, email, profile: PROFILE_URL })
        .select()
        .single();
        
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

export const signOutUser = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const { error } = await supabase.auth.signOut();
      return { error };
    };
    try {
      const { error } = await fetchData();
      if (!error) dispatch(user_slice.actions.deleteUser());
    } catch (error) {
      console.log(error);
    }
  };
};

export const user_action = user_slice.actions;
export default user_slice;
