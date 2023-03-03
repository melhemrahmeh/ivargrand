import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Product_row from "../components/products/Product_row";
import {data} from "../components/products/data"

const Products = () => {
  return (
    <>
      <Navbar />
      <Product_row />
      <Footer  />
      
    </>
  );
};

export default Products;

