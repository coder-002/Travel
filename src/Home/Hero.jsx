import React from "react";
import "./Home.css";
const Hero = () => {
  return (
    <div className="hero">
      <img
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80"
        alt="home"
      />
      <div className="hero-text">
        <h1>Your journey starts here</h1>
        <p>Choose your favourite destination</p>
        <button className="btn">Tour Plan</button>
      </div>
    </div>
  );
};

export default Hero;
