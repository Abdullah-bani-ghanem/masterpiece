import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Cars from "./Pages/Cars";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";


import React from 'react'

function App() {
  return (
    <div>
      <Router>

<Navbar/>
       <Routes>

        <Route path="/home"element={<Home/>}></Route>
        <Route path="/about"element={<About/>}></Route>
        <Route path="/contact"element={<Contact/>}></Route>
        <Route path="/cars"element={<Cars/>}></Route>
        <Route path="/contact"element={<Contact/>}></Route>



       </Routes>




      </Router>
    </div>
  )
}

export default App

