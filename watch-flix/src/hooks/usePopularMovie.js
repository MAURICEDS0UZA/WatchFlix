import { useDispatch } from "react-redux";
import { Api_Option } from "../utils/constant";
import { addPopularMovie } from "../utils/popular";
import { useEffect } from "react";

const usePopularMovies = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopluarMovie();
  }, []);

  const getPopluarMovie = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      Api_Option
    );
    const data = await res.json();
    dispatch(addPopularMovie(data?.results));
  };
};

export default usePopularMovies;
