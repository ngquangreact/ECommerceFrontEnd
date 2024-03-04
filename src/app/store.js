import { configureStore } from "@reduxjs/toolkit";
import authReduser from "../features/user/userSlice";
import productReducer from "../features/products/productSlice";
import blogReducer from "../features/blogs/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReduser,
    product: productReducer,
    blog: blogReducer,
  },
});
