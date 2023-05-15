import React from "react";
import IMG1 from "../../assets/home/1.jpg";
import IMG2 from "../../assets/home/2.jpg";
import IMG3 from "../../assets/home/3.jpg";
import "./home_courasel.css";

const Home_courasel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active ">
            <img src={IMG3} class="d-block w-50" alt="..." />
          </div>

          <div class="carousel-item">
            <img src={IMG2} class="d-block w-50" alt="..." />
          </div>

          <div class="carousel-item">
            <img src={IMG1} class="d-block w-50" alt="..." />
          </div>
        </div>
        <div class="carousel-indicators position-static m-0">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
         
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home_courasel;
