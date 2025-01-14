import React from "react";
import { useSelector } from "react-redux";

const TopRatedMovies = () => {
  const topMovies = useSelector((store) => store?.popular?.addPopularMovie);

  return (
    <>
      <section className=" bg-black pb-4">
        <div className=" w-auto text-white font-bold scroll text-2xl pl-6 py-4">
          Popular movies
        </div>
           <div className=" w-auto h-56  flex gap-4 overflow-x-scroll scroll-smooth no-scrollBar" >
          { topMovies?.map((movie) => {
            return movie?.original_title !== "Deadpool & Wolverine" ? (
              <img
              key={movie?.id}
                src={`https://image.tmdb.org/t/p/w500//${movie?.poster_path}.jpg`}
                alt=" card  Movie"
              />
            ) : null;
          })}
          <img
            src="https://image.tmdb.org/t/p/w500///pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg.jpg"
            alt=" top"
          />
        </div>
      </section>
    </>
  );
};

export default TopRatedMovies;
