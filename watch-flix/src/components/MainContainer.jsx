import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UseTrailerVideo from "../hooks/useTrailerVideo";

const MainContainer = () => {
  const selectMovies = useSelector((store) => store.movies);
  const trailerId = UseTrailerVideo(selectMovies?.nowPlayingMovies?.[0]?.id);
  return (
    <div className="w-auto relative">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerId}?&autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
      ></iframe>
      <div className="absolute top-[25%] p-[5%] ml-4 mt-28 ">
        <h1 className="font-extrabold text-white py-4 text-5xl">
          {selectMovies?.nowPlayingMovies?.[0]?.original_title}
        </h1>
        <h3 className="text-white py-4 text-sm w-1/4">
          {selectMovies?.nowPlayingMovies?.[0]?.overview}
        </h3>
        <div className="flex gap-2 mt-8">
          <button
            type="button"
            className=" text-black bg-red-500 px-6 py-2 rounded-md font-bold  hover:bg-slate-200"
          >
            <span className="pr-2">▶</span> Play
          </button>
          <button
            type="button"
            className=" text-black bg-red-500 px-6 py-2 rounded-md font-bold hover:bg-slate-200"
          >
            <span className="pr-2">ℹ️</span> More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
