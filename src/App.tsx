// import { Routes, Route } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Component/Dashboard/navBar";
import SignUp from "./Component/Login-SignUp";

function App() {
  return (
    <>
      <SignUp />
    </>
  );
}
export default App;
