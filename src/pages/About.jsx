import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../index.css";
import Header from "../components/About/Header";
import Card from "../components/About/CardComponent";
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
