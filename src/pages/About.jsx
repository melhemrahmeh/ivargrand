import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../index.css";
import Header from "../components/About/Header";
import Card from "../components/About/Card";
import Data from "../components/data.json";
import Team from "../components/About/Team";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <Footer />
    </>
  );
};

export default About;
