import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoader(state) {
      state.loader = !state.loader;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
