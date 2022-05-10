import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './views/Home'

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
