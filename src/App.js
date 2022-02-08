//Pages
import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; 
import Navbar from "./pages/Navbar/Navbar";


import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element = { <Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
