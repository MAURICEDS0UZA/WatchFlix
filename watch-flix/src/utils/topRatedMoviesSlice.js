import { createSlice } from "@reduxjs/toolkit";

const topRatedSlice = createSlice({
  name: "TopRatedMovies",
  initialState: {
    upComing: null,
    topMovies: null,
  },

  reducers: {
    addTopRatedMovies: (state, action) => {
      state.topMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComing = action.payload;
    },
  },
});
export const { addTopRatedMovies, addUpComingMovies } = topRatedSlice.actions;
export default topRatedSlice.reducer;
