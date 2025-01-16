import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

export const MovieList = () => {
  const selectMovies = useSelector((store) => store.movies);
  const popular = useSelector((store) => store?.popular?.addPopularMovie);
  const topRatedMovies = useSelector((store) => store?.topRated?.topMovies);
  const upComingMovies = useSelector((store) => store?.topRated?.upComing);
  return (
    <>
      {selectMovies?.nowPlayingMovies ? (
        <MovieCard
          card_title={`Now Playing Movies`}
          movieslist={selectMovies?.nowPlayingMovies}
          excudeMovie={selectMovies?.nowPlayingMovies?.[0]?.original_title}
        />
      ) : null}
      {!popular?.nowPlayingMovies ? (
        <MovieCard card_title={"Popular Movies"} movieslist={popular} />
      ) : null}
      {topRatedMovies ? (
        <MovieCard
          card_title={"Top Rated Movies"}
          movieslist={topRatedMovies}
        />
      ) : null}
      {upComingMovies !== null ? (
        <MovieCard
          card_title={"Up Coming Movies"}
          movieslist={upComingMovies}
        />
      ) : null}
    </>
  );
};
