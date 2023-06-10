import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import uiSlice from "./uiSlice";
import productSlice from "./productSlice";
import currentProductSlice from "./currentProductSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
    product: productSlice,
    current: currentProductSlice,
  },
});

export default store;
