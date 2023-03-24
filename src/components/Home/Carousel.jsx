import React from "react";
import IMG1 from "../../assets/products/courasel/1.jpg";
import IMG2 from "../../assets/products/courasel/2.jpg";
import IMG3 from "../../assets/products/courasel/3.jpg";
import IMG4 from "../../assets/products/courasel/4.jpg";
import IMG5 from "../../assets/products/courasel/5.jpg";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        
        <div class="carousel-inner ">
          <div class="carousel-item active ">
            <img src={IMG1} class="d-block w-50" alt="..." />
          <div class="carousel-item">
            <img src={IMG2} class="d-block w-50" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={IMG3} class="d-block w-50" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={IMG4} class="d-block w-50" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={IMG5} class="d-block w-50" alt="..." />
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
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
    </div>
    </>
  );
};

export default Carousel;
