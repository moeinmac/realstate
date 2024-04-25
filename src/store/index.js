import { configureStore } from "@reduxjs/toolkit";
import user_slice from "./user-slice";

const store = configureStore({
  reducer: {
    user: user_slice.reducer,
  },
});

export default store;
