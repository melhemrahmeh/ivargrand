import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/color_logo.png";
import "./Navbar.css";

const Navbar = () => {
  //
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div>
          <img src={LOGO} alt="" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active text-white" to="/home">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active text-white" to="/products">
                  Products
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active text-white" to="/about">
                  About us
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active text-white" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
