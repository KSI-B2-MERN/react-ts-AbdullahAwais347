import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const roleOptions = [
  { value: "1", label: "student" },
  { value: "2", label: "teacher" },
];

function SignUp() {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const onFNameChange = (fName: string) => {
    setFName(fName);
  };
  const onLNameChange = (lName: string) => {
    setLName(lName);
  };

  const onUsernameChange = (username: string) => {
    setUsername(username);
  };
  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  const onRoleChange = (role: string) => {
    setRole(role);
  };

  const signUp = async () => {
    const loginRes = await axios.post("http://localhost:3000/auth/signup", {
      fName: fName,
      lName: lName,
      username: username,
      password: password,
      role: role,
    });
    if (loginRes.data) {
      alert("logged in successfuly");
    } else {
      alert("incorrect username/password");
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-auto  bg-slate-200 ">
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
        <div className="flex justify-end items-end h-auto w-1/2 ">
          <div className="flex justify-center flex-col  m-auto mt-14 mb-4  w-72 h-auto rounded-xl bg-white border-slate-500 border-2">
            <label className="ml-3 mt-4">First Name</label>
            <input
              type="text"
              placeholder="Enter First name"
              className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
              onChange={(e) => {
                void onFNameChange(e.target.value);
              }}
            />
            <label className="ml-3 mt-4">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last name"
              className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
              onChange={(e) => {
                void onLNameChange(e.target.value);
              }}
            />
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
            <label className="ml-3 mt-4">Role</label>
            <Select
              className="bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
              isSearchable={true}
              options={roleOptions}
              placeholder="Select Role"
              onChange={(e) => {
                void onRoleChange(e?.value || "");
              }}
            />
            {/* <select name="Role" className="">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select> */}
            <button
              className=" bg-gray-400  mt-6 m-auto w-32 p-1 rounded-md text-black"
              onClick={() => {
                void signUp();
              }}
            >
              Sign Up
            </button>
            <label className="m-auto mt-2">Or</label>
            <button className="bg-gray-400  mt-2 mb-2 m-auto w-40 p-1 rounded-md text-black">
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
