import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div class="text-center text-white" id="background">
        <div class="container pt-4">
          <section class="mb-4 mid">
            <Link class="btn btn-link btn-floating btn-lg text-dark m-1 text-decoration-none" to="/home">
              Home
            </Link>
           
            <Link class="btn btn-link btn-floating btn-lg text-dark m-1 text-decoration-none" to="/products">
              Products
            </Link>
           
            <Link class="btn btn-link btn-floating btn-lg text-dark m-1 text-decoration-none" to="/about">
              About us
            </Link>
           
            <Link class="btn btn-link btn-floating btn-lg text-dark m-1 text-decoration-none" to="/contact">
              Contact us
            </Link>
           

            
          </section>
        </div>

        <div class="text-center text-dark p-3" id="bg2">
          © 2023 Copyright:{" "}
          <a class="text-dark" href="https://mdbootstrap.com/">
            IVAR GRAND
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
