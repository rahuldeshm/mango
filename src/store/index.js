import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import uiSlice from "./uiSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: { auth: authSlice, ui: uiSlice, product: productSlice },
});

export default store;
