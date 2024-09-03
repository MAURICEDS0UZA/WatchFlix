import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./configSlice";
import movieReducer from "./movieSlice";
import popularReducer from "./popular";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    popular: popularReducer,
  },
});

export default appStore;
