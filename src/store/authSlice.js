import { createSlice } from "@reduxjs/toolkit";
let authorisation = JSON.parse(localStorage.getItem("authorisedSeller"));
let type = "Seller";
if (!!!authorisation) {
  authorisation = JSON.parse(localStorage.getItem("authorisedLogin"));
  type = "Login";
}
const authorised = !!authorisation;
const initialState = { authorisation, authorised, type };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.authorisation = action.payload.authorisation;
      state.authorised = true;
      state.type = action.payload.type;
    },
    logout(state, action) {
      state.authorisation = null;
      state.authorised = false;
      state.type = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
