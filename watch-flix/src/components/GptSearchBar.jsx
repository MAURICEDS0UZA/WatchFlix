import React from "react";
import { PlaceHolderForSearch, SearchBtnTxt } from "../utils/constant";

const GptSearchBar = () => {
  return (
    <>
      <form className="bg-black border border-white flex justify-center">
        <input
          type="text"
          name="searchBar"
          placeholder={`${PlaceHolderForSearch}`}
          className="p-2 pl-4  mx-4 my-2 w-1/4 font-mono rounded-lg"
        />
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded-lg  my-2 "
        >
          {`${SearchBtnTxt}`}
        </button>
      </form>
    </>
  );
};

export default GptSearchBar;
