import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div class="text-center text-white bg_beige">
        <div class="container pt-4 links">
          <section class="mb-4 mid link-red">
            <Link
              class="btn btn-link btn-floating btn-lg text-white m-1 text-decoration-none"
              to="/home"
            >
              Home
            </Link>

            <Link
              class="btn btn-link btn-floating btn-lg text-white m-1 text-decoration-none"
              to="/products"
            >
              Products
            </Link>

            <Link
              class="btn btn-link btn-floating btn-lg text-white m-1 text-decoration-none"
              to="/about"
            >
              About us
            </Link>

            <Link
              class="btn btn-link btn-floating btn-lg text-white m-1 text-decoration-none"
              to="/contact"
            >
              Contact us
            </Link>
          </section>
        </div>

        <div class="text-center text-white p-3" id="bg2">
          
          <a class="text-white" href="https://ivargrand.com/">
            IvarGrand
          </a> © 2024 All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
