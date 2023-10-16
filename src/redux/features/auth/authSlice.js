import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUser: null,
  isLogin: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      state.loginUser = action.payload;
      state.isLogin = true;
      state.token = action.payload.token;
    },
    logOut: (state) => {
      state.isLogin = false;
      state.loginUser = null;
      state.token = null;
    },
  },
});

export const { isLoggedIn, logOut } = authSlice.actions;
export default authSlice.reducer;
