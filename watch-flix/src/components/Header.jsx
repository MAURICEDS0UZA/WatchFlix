import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-around bg-gradient-to-b from-black  ">
        <h1 className="text-red-500 font-extrabold font-mono text-3xl p-2 ">
          WatchFlix
        </h1>
        <div>
          <button className="px-4 p-1 m-2 rounded-md text-white bg-red-500">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
