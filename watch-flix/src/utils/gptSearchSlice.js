import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt Search",
  initialState: { isGptSearchOn: false },
  reducers: {
    isGptSearch: (state) => {
      state.isGptSearchOn = !state.isGptSearchOn;
    },
  },
});

export const { isGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
