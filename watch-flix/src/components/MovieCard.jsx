import React from "react";

export default function MovieCard({ card_title, movieslist, excudeMovie }) {
  console.log(movieslist);
  return (
    <section className=" bg-black pb-4">
      <div className=" w-auto text-white font-bold scroll text-2xl pl-6 py-4">
        {card_title}
      </div>
      <div className=" w-auto h-56  flex gap-4 overflow-x-scroll scroll-smooth no-scrollBar">
        {movieslist?.map((movie) => {
          return movie?.original_title !== excudeMovie ? (
            <img
              className="hover:scale-95"
              key={movie?.id}
              src={`https://image.tmdb.org/t/p/w500//${movie?.poster_path}.jpg`}
              alt=" card  Movie"
            />
          ) : null;
        })}
      </div>
    </section>
  );
}
