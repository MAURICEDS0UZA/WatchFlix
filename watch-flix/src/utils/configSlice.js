import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      return (state.user = action.payload);
    },
    removeUser: (state) => {
      return (state.user = null);
    },
  },
});

export const { addUser, removeUser } = configSlice.actions;
export default configSlice.reducer;
