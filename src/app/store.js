import { configureStore } from "@reduxjs/toolkit";
import authReduser from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReduser,
  },
});
