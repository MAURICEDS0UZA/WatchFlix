const Login = () => {
  return (
    <>
      <section className=" w-full h-screen bg-gradient-to-t  from-black pt-8">
        <form className="w-full max-w-xs sm:max-w-md   p-12 bg-opacity-80 bg-black  mx-auto right-0 left-0 text-white rounded-lg  ">
          <div className="flex flex-col">
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
            />

            <div className=" flex justify-between flex-col sm:flex-row items-center">
              <button
                type="submit"
                className="bg-red-500 rounded-2xl my-4 w-1/2 py-2 text-center "
              >
                Sign In
              </button>
              <span className="p-2 sm:my-4 inline-block text-red-400">
                Forgot password ?
              </span>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
