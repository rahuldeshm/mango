import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

const currentProductSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    addCurrent(state, action) {
      state.current = action.payload;
    },
  },
});

export const currentProductActions = currentProductSlice.actions;

export default currentProductSlice.reducer;
