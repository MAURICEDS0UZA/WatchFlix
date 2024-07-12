import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/fibreBase";
import { addUser, removeUser } from "../utils/configSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const UserSelector = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: auth?.currentUser?.photoURL,
          })
        );
        // navigate("/Browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  // *sign out user
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log("sign out error");
      });
  };

  return (
    <>
      <div className="flex justify-around bg-gradient-to-b from-black  ">
        <h1 className="text-red-500 font-extrabold font-mono text-3xl p-2 ">
          WatchFlix
        </h1>
        {UserSelector && (
          <div className="flex">
            <img
              className="size-12 p-1 m-2  rounded-[30%]"
              src={UserSelector?.photoURL}
              alt="userImage"
            />
            <button
              className="px-4 p-1 m-2 rounded-md text-white bg-red-500"
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
}

export default Header;
