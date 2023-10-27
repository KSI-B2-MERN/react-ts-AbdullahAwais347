import React from "react";

function NavBar() {
  return (
    <>
      <div className="w-full h-auto bg-slate-200">
        <div className="flex w-full h-16 bg-white">
          <img
            src="src\assets\KS logo.png"
            alt="KS Logo"
            className=" h-9 ml-12 mt-4 "
          />
          <span className=" ml-4 mt-5 ">Knowledge Stream</span>
          <span className="flex justify-center">
            <button className=" bg-blue-700 h-8  p-1 rounded-lg text-white ">
              Log in
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
export default NavBar;
