import { createSlice } from "@reduxjs/toolkit";
let authorisation = JSON.parse(localStorage.getItem("Seller"));
let type = "Seller";
if (!!!authorisation) {
  authorisation = JSON.parse(localStorage.getItem("Login"));
  type = "Login";
}
type = !!authorisation ? type : null;
const initialState = { authorisation, type };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.authorisation = action.payload.authorisation;
      state.type = action.payload.type;
    },
    logout(state, action) {
      localStorage.removeItem(type);
      state.authorisation = null;
      state.type = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
