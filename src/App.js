//Pages
import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; 
import Navbar from "./pages/Navbar/Navbar";
import Aanbod from "./pages/Aanbod/Aanbod";


import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className = "pages-content">
        <Routes>
          <Route path="/" element = { <Home/>}/>
          <Route path="/Aanbod" element = { <Aanbod/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
