import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products = Array.isArray(action.payload)
        ? [...state.products, ...action.payload]
        : [...state.products, action.payload];
    },
    logout(state, action) {
      state.products = [];
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
