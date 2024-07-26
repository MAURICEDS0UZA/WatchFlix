import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Api_Option } from "../utils/constant";
import { addMovie } from "../utils/movieSlice";

const UseNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Api_Option
    );
    const data = await res.json();
    dispatch(addMovie(data?.results));
  };
};

export default UseNowPlayingMovies;
