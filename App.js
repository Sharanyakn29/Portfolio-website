import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Maya from "./routes/Maya";
import Blender from "./routes/Blender";
import Photoshop from "./routes/Photoshop";
import Illustrator from "./routes/Illustrator";
import Aftereff from "./routes/Aftereff";
import Resume from "./routes/Resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/maya" element={<Maya />}></Route>
        <Route path="/blender" element={<Blender />}></Route>
        <Route path="/illustrator" element={<Illustrator />}></Route>
        <Route path="/photoshop" element={<Photoshop />}></Route>
        <Route path="/aftereff" element={<Aftereff />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </>
  );
}

export default App;
