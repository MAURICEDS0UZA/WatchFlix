import { createSlice } from "@reduxjs/toolkit";

const popular = createSlice({
  name: "PopularMovie",
  initialState: { addPopularMovie: null },
  reducers: {
    addPopularMovie: (state, action) => {
      state.addPopularMovie = action.payload;
    },
  },
});

export const { addPopularMovie } = popular.actions;
export default popular.reducer;
