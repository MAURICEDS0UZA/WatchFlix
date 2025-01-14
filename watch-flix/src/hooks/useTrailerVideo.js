import { useDispatch, useSelector } from "react-redux";
import { Api_Option } from "../utils/constant";
import { addTrailervideo } from "../utils/popular";
import { useEffect } from "react";

const UseTrailerVideo = (movie_key) => {
  const dispatch = useDispatch();
  const selectTrailer = useSelector((store) => store.popular);

  const getPosterVideo = async (movie_id) => {
    if (!movie_id) return;
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      Api_Option
    );
    const res = await data.json();
    const result = res?.results?.filter((video) => video?.type === "Trailer");
    dispatch(addTrailervideo(result));
  };
  useEffect(() => {
    if (!movie_key) return;
    // getPosterVideo(1213)
    getPosterVideo(movie_key);
  }, [movie_key]);
  const trailerId = selectTrailer?.addTrailervideo
    ? selectTrailer?.addTrailervideo[0]?.key
    : "12121";
  return trailerId;
};

export default UseTrailerVideo;
