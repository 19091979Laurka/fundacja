import React from "react";
import { Routes, Route } from "react-router-dom";
import FoundationLayout from "./FoundationLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Foundation = () => (
  <Routes>
    <Route path="/" element={<FoundationLayout />}>
      <Route index element={<Home />} />
      <Route path="o-nas" element={<About />} />
      <Route path="projekty" element={<Projects />} />
      <Route path="kontakt" element={<Contact />} />
    </Route>
  </Routes>
);

export default Foundation;
