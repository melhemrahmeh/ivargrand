import React from "react";
import "./Home.css";
import Product from "../products/Product";
import { data } from "./data";
import { Link } from "react-router-dom";

import Home_courasel from "./home_courasel";


const Home_page = () => {
  return (
    <div className="hiMain">
      <Home_courasel/>
      <div className="main_home">
        <div className="title_main">
          <h2>Welcome to </h2>
          <h1>IvarGrand</h1>
        </div>
      </div>

      <div className="highlightedProducts">
        <h1 className="highTitle text-white ">Highlighted Products</h1>
        <div className="products_main">
          {data.map(({ img, name, description, price }) => {
            return (
              <Product
                image={img}
                name={name}
                description={description}
                price={price}
              />
            );
          })}
          <button className="btn btn-danger customButton"><Link class="nav-link active text-white" to="/products">
                  View more
                </Link></button>
        </div>

      </div>
    </div>
  );
};

export default Home_page;
