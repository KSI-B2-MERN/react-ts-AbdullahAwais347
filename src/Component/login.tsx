import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onUsernameChange = (username: string) => {
    setUsername(username);
  };
  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  const login = async () => {
    console.log("Log in func");
    const loginRes = await axios.post("http://localhost:3000/auth/login", {
      username: username,
      password: password,
    });
    if (loginRes.data) {
      navigate("/home");
    } else {
      alert("incorrect username/password");
    }
  };

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
            <label className="ml-3 mt-4">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
              onChange={(e) => {
                void onUsernameChange(e.target.value);
              }}
            />
            <label className="ml-3 mt-4">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
              onChange={(e) => {
                void onPasswordChange(e.target.value);
              }}
            />
            {/* <button
              className=" c"
              onClick={() => {
                navigate("/Home");
              }}
            >
              Login
            </button> */}
            <button
              className=" bg-gray-400 flex justify-center mt-6 m-auto w-32 p-1 rounded-md text-black"
              onClick={() => {
                void login();
              }}
            >
              Login
            </button>
            <label className="m-auto mt-0">Or</label>
            <button
              className="bg-gray-400  mt-0 m-auto w-40 p-1 rounded-md text-black"
              onClick={() => {
                navigate("/signUp");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
