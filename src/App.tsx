// import { Routes, Route } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Component/sign-up";
import LogIn from "./Component/login";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LogIn />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}
export default App;
