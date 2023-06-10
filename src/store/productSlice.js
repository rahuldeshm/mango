import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: {} };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products = { ...state.products, ...action.payload };
    },
    addNewProduct(state, action) {
      state.products = {
        ...state.products,
        [action.payload.id]: action.payload.product,
      };
    },
    logout(state, action) {
      state.products = {};
    },
    deleteProduct(state, action) {
      const products = { ...state.products };
      delete products[action.payload];
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
