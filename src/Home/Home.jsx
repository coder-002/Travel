import React from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";
import Destination from "./Destination";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
    </>
  );
};

export default Home;
