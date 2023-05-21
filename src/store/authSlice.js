import { createSlice } from "@reduxjs/toolkit";

const initialState = { authorisation, authorised };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuthorisation(state, action) {
      state.authorisation = action.payload.authorisation;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
