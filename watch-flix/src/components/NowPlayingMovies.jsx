import React from "react";
import { useSelector } from "react-redux";

const NowPlayingMovies = () => {
  const selectMovies = useSelector((store) => store.movies);

  return (
    <>
      <section className=" bg-black pb-4">
        <div className=" w-auto text-white font-bold scroll text-2xl pl-6 py-4">
          Now Playing Movies
        </div>
        <div className=" w-auto h-56 -ml-8 flex gap-4 overflow-x-scroll scroll-smooth">
          {selectMovies?.nowPlayingMovies?.map((movie) => {
            return movie?.original_title !== "Deadpool & Wolverine" ? (
              <img
                src={`https://image.tmdb.org/t/p/w500//${movie?.poster_path}.jpg`}
                alt=" card  Movie"
              />
            ) : (
              "FALSE"
            );
          })}
        </div>
      </section>
    </>
  );
};

export default NowPlayingMovies;
