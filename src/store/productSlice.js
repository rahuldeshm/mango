import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, actions) {},
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
