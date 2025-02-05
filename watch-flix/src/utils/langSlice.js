import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "language slice",
  initialState: {
    lang: "EN_US",
  },
  reducers: {
    selectLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { selectLang } = langSlice.actions;
export default langSlice.reducer;
