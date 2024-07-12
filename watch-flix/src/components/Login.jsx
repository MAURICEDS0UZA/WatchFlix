import { useRef, useState } from "react";
import validateInput from "../utils/validateForm";
import { auth } from "../utils/fibreBase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/configSlice";
import useRandomImage from "../utils/useRandomImage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const [signIn, setsignIn] = useState(true);
  const [errmessage, seterrmessage] = useState(null);

  const photo = useRandomImage();
  const dispatch = useDispatch();
  const UserSelector = useSelector((store) => store.user);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // * toggle feat for sign
  const toggleSignInForm = () => {
    setsignIn(!signIn);
  };

  const handleValidation = () => {
    // *Validating email * password
    const message = validateInput(email.current.value, password.current.value);
    seterrmessage(message);
    if (message) return;

    if (!signIn) {
      //* Signed up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // *update user
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: photo,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: user?.photoURL,
                })
              );
            })
            .catch((error) => {
              seterrmessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmessage(errorCode + "-" + errorMessage);
        });
    } else {
      //* Signed in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmessage(errorCode + "--" + errorMessage);
        });
    }
  };

  return (
    <>
      <section className=" w-full h-screen bg-gradient-to-t  from-black pt-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-xs sm:max-w-md   p-12 bg-opacity-80 bg-black  mx-auto right-0 left-0 text-white rounded-lg  "
        >
          <div className="flex flex-col">
            {!signIn && !UserSelector && (
              <>
                <label
                  htmlFor="name"
                  className=" m-2 text-lg font-semibold font-serif"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder=" Enter user Name"
                  className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                  ref={name}
                />
              </>
            )}
            <label
              htmlFor="email"
              className="m-2 text-lg font-semibold font-serif"
            >
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter email ID"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
              ref={email}
            />
            <label
              htmlFor="password"
              className="m-2 text-lg font-semibold font-serif"
            >
              Password
            </label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter password"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
              ref={password}
            />
            <p>{errmessage}</p>
            {signIn && !UserSelector ? (
              <div className=" flex justify-between flex-col sm:flex-row items-center">
                <button
                  className="bg-red-500 rounded-2xl my-4 w-1/2 py-2 text-center "
                  onClick={() => {
                    handleValidation();
                  }}
                >
                  Sign In
                </button>
                <span className="p-2 sm:my-4 inline-block text-red-400">
                  Forgot password ?
                </span>
              </div>
            ) : (
              <button
                onClick={() => {
                  handleValidation();
                }}
                className="bg-red-500 rounded-2xl my-4 w-1/2 py-2 text-center mx-auto right-0 left-0 "
              >
                Sign up
              </button>
            )}
            <p
              className="py-4 cursor-pointer font-mono"
              onClick={toggleSignInForm}
            >
              {signIn && !UserSelector
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In Now."}
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
