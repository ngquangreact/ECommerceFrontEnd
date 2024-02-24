import { configureStore } from "@reduxjs/toolkit";
import authReduser from "../features/user/userSlice";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReduser,
    product: productReducer,
  },
});
