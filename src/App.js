import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/projects/Projects";
import WhatsApp from "./views/projects/WhatsAppRedesign";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/Home" />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Projects" element={<Projects />}></Route>
      <Route path="/Projects/WhatsApp" element={<WhatsApp />}></Route>
    </Routes>
  );
}

export default App;
