import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./configSlice";
import movieReducer from "./movieSlice";
import popularReducer from "./popular";
import topRatedReducer from "./topRatedMoviesSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    popular: popularReducer,
    topRated: topRatedReducer,
  },
});

export default appStore;
