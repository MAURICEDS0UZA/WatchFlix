import { useEffect } from "react";
import { Api_Option } from "../utils/constant";
import { useDispatch } from "react-redux";
import {
  addTopRatedMovies,
  addUpComingMovies,
} from "../utils/topRatedMoviesSlice";

const UseTopRated = () => {
  const dispatch = useDispatch();
  const urlTopRated =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const urlUpcoming =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const getTopRatedMovies = async (url) => {
    const data = await fetch(url, Api_Option);
    const res = await data.json();
    url === urlTopRated
      ? dispatch(addTopRatedMovies(res?.results))
      : dispatch(addUpComingMovies(res?.results));
  };

  useEffect(() => {
    const fetchMovies = async () => {
      await getTopRatedMovies(urlTopRated);
      await getTopRatedMovies(urlUpcoming);
    };
    fetchMovies();
  }, []);
};
export default UseTopRated;
