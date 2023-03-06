import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="aboutImg">
        <img
          src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80"
          alt="about"
        />
        <h1>About us</h1>
      </div>
      <div className="about-text">
        <p>
          Welcome to Travels in Nepal. We are a licensed and registered travel
          and tour company in Kathmandu, Nepal. It was founded by a native son
          of Nepal, Prakash Aryal, to offer travels and tours in Nepal. Our goal
          is to show you the wonders of our country, including our famous
          mountains, fascinating history and colourful culture. It is our
          distinct pleasure to create personalized tours as well as trekking
          packages. Our native guide can provide the perfect tour and trekking
          packages to your satisfaction. Attractive Travel Nepal is a well-known
          tour and travel agency in Nepal which specializes in Nepal tour
          packages & trekking activities within Nepal, Tibet, and Bhutan. We are
          dedicated to collaborating with other authorized outfitters to arrange
          whatever it is you’re looking for. It can include a tour of UNESCO
          World Heritage Sites, a heli tour of our highest peaks, a trek to
          basecamp, or a shorter hike. It can also include a visit to one of our
          famous temples or historic sites, a celebration of a Nepalese wedding,
          and many more. Furthermore, our guides are vetted and educated, each
          passing strict tourism criteria established by the government. Please
          read our reviews. We are happy to connect you to some of our past
          clients who will attest to their satisfactory travel experience with
          our guides. Many of our clients are repeat customers and considered
          friends. Let us work with you to create the trip of a lifetime! “Book,
          Explore and Discover”
        </p>
      </div>
    </>
  );
};

export default About;
