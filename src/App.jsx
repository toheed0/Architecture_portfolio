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
      <div className="h-screen flex items-center justify-center bg-black text-white text-2xl">
      🚧 Website Temporarily Unavailable 🚧

Our servers are currently down for maintenance or updates.  
We’ll be back online shortly — thank you for your patience!  

For urgent assistance, please contact Developer:  


    </div>
      {/* <Hero/>
      <About/>
      <Projects/>
      <Services/>
      <Team/>
      <Footer/> */}
    </>
  );
}
