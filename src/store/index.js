import { configureStore } from "@reduxjs/toolkit";
import user_slice from "./user-slice";
import estate_slice from "./estate-slice";

const store = configureStore({
  reducer: {
    user: user_slice.reducer,
    estate: estate_slice.reducer,
  },
});

export default store;
