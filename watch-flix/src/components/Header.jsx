import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/fibreBase";
import { addUser, removeUser } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserSelector = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: auth?.currentUser?.photoURL,
          })
        );
        navigate("/Browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // * unmount onAuthStateChanged
    return () => {
      unsubscribe();
    };
  }, []);

  // *sign out user
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log("sign out error", error);
      });
  };

  return (
    <>
      <div className="flex justify-between bg-gradient-to-b from-black  items-center p-4">
        <h1 className="text-red-500 font-extrabold font-mono text-3xl p-2 ">
          WatchFlix
        </h1>
        {UserSelector && (
          <div className="flex items-center">
            <div className="flex flex-col  gap-3">
              <img
                className="size-10  m-4 relative rounded-[30%]"
                src={UserSelector?.photoURL}
                alt="userImage"
              />
              <p className="text-sm absolute top-14 pl-5">
                {UserSelector?.displayName}
              </p>
            </div>
            <button
              className="px-4 p-1 m-2 rounded-md text-white bg-red-500 h-10"
              onClick={(e) => {
                e.preventDefault();
                handleSignOut();
              }}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
