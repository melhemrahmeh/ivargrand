import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Product_row from "../components/products/Product_row";
import Carousel from "../components/Home/Carousel";


const Products = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Product_row />
      <Footer  />
      
    </>
  );
};

export default Products;

