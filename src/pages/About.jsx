import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../index.css"
import Header from "../components/About/Header";
import Card from "../components/About/Card";
import Data from "../components/data.json"
import Team from "../components/About/Team";

const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <Team />
    </>
  );
};

export default About;
