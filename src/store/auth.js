import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAunthenticate: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAunthenticate = true;
    },
    logout(state) {
      state.isAunthenticate = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
