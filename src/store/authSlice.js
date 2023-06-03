import { createSlice } from "@reduxjs/toolkit";
let authorisation = JSON.parse(localStorage.getItem("Seller"));
let type = "Seller";
if (!!!authorisation) {
  authorisation = JSON.parse(localStorage.getItem("Login"));
  type = "Login";
}
type = !!authorisation ? type : null;
let email = "";
if (!!authorisation) {
  email = authorisation.email.replace("@", "").replace(".", "");
}
const initialState = { authorisation, type, email };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.authorisation = action.payload.authorisation;
      state.type = action.payload.type;
      state.email = action.payload.authorisation.email
        .replace("@", "")
        .replace(".", "");
    },
    logout(state) {
      localStorage.removeItem(state.type);
      state.authorisation = null;
      state.type = null;
      state.email = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
