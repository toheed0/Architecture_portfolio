import { Routes, Route } from "react-router-dom";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Team from "./components/Team";

export default function App() {
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Services/>
      <Team/>
      <Footer/>
    </>
  );
}
