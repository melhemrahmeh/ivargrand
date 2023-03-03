import React from "react";
import IMG1 from "../images/8e64d14c-d5df-4050-b76e-c7c0c90da004.jpg"
import IMG2 from "../images/happy-young-asian-businessmen-businesswomen-meeting-brainstorming-ideas.jpg"

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide vh-50"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={IMG1} class="d-block w-100 vh-50" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={IMG2} class="d-block w-100" alt="..." />
          </div>
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
