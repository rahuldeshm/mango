import { createSlice } from "@reduxjs/toolkit";
const authorisation = JSON.parse(localStorage.getItem("authorised"));
const authorised = !!authorisation;
const initialState = { authorisation, authorised };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.authorisation = action.payload;
      state.authorised = true;
    },
    logout(state, action) {
      state.authorisation = null;
      state.authorised = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
