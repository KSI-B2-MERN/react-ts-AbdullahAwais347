function Login() {
  return (
    <>
      <div className="flex flex-col justify-center items-center  bg-slate-200 ">
        <h1 className="font-medium">Log in </h1>
        <p>Provide your valid credentials</p>
      </div>
      <div className=" flex bg-slate-200 h-1/2">
        <div className="w-1/2">
          <img
            src="src\assets\Signup.png"
            alt="Sign-up image"
            className=" h-64 w-64 mt-10"
          />
        </div>
        <div className="flex justify-end items-end w-1/2 ">
          <div className="flex justify-center flex-col  m-auto mt-14  w-72 h-80 rounded-xl bg-white border-slate-500 border-2">
            <label className="ml-3 mt-4">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
            />
            <label className="ml-3 mt-4">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
            />
            <button className=" bg-gray-400  mt-6 m-auto w-32 p-1 rounded-md text-black">
              Login
            </button>
            <label className="m-auto mt-0">Or</label>
            <button className="bg-gray-400  mt-0 m-auto w-40 p-1 rounded-md text-black">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
