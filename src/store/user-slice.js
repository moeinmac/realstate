import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth : false,
  data : []
}

const user_slice = createSlice({
  name : "user",
  initialState,
  reducers : {
    setUser(state,action){
      state.isAuth = true
      state.data = action.payload.data
    }
  }
})

export const user_action = user_slice.actions
export default user_slice
