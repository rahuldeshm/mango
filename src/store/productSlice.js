import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products = [...state.products, action.payload];
      console.log(state.products);
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
