import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Service.css";

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="serviceImg">
        <img
          src="https://images.unsplash.com/photo-1486078695445-0497c2f58cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
          alt=""
        />
        <h1>Service</h1>
      </div>
    </>
  );
};

export default Service;
