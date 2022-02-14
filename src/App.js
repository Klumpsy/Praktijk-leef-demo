//Pages
import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; 
import Navbar from "./pages/Navbar/Navbar";
import Aanbod from "./pages/Aanbod/Aanbod";
import Werkwijze from "./pages/Werkwijze/Werkwijze";
import Bekwaamheden from "./pages/Bekwaamheden/Bekwaamheden";
import Tarieven from "./pages/Tarieven/Tarieven"; 
import Contact from "./pages/Contact/Contact"; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className = "pages-content">
        <Routes>
          <Route path="/Praktijk-leef-demo" element = { <Home/>}/>
          <Route path="/Aanbod" element = { <Aanbod/>}/>
          <Route path = "/Werkwijze" element = {<Werkwijze/>}/>
          <Route path = "/Bekwaamheden" element = {<Bekwaamheden/>}/>
          <Route path = "/Tarieven" element = {<Tarieven/>}/>
          <Route path = "/Contact" element = {<Contact/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
