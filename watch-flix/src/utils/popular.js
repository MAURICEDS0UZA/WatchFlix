import { createSlice } from "@reduxjs/toolkit";

const popular = createSlice({
  name: "PopularMovie",
  initialState: { addPopularMovie: null, addTrailervideo: null },
  reducers: {
    addPopularMovie: (state, action) => {
      state.addPopularMovie = action.payload;
    },
    addTrailervideo: (state, action) => {
      state.addTrailervideo = action.payload;
    },
  },
});

export const { addPopularMovie, addTrailervideo } = popular.actions;
export default popular.reducer;
