import React from "react";
import Product from "./Product";
import { data } from "./data";
import IMG from "../../assets/productIntro.jpg";
import "./Product_row.css";

const Product_row = () => {
  return (
    <>
      <img src={IMG} alt="" className="w-100" />
      <div className="w-100 text-center d-flex flex-column align-items-center custom">
        <div className="w-50 my-5">
          <h1>Product Range</h1>
          <p>
            IVAR Lubricants offers an extensive range of products covering all
            your lubrication needs. Our segments include passenger car,
            motorcycle, commercial transport, industrial, agriculture, racing,
            marine, and mining solutions. With a bronze, silver, gold, and
            platinum line, we offer something for every need. With our oil
            advisor you know exactly which products are suitable for your
            vehicle.
          </p>
        </div>

        <div className="w-50 my-5">
          <h1>Quality</h1>
          <p>
            We want to ensure our products perform in the most extreme
            circumstances. That is why it is our priority to keep a high quality
            standard. To ensure your vehicle is protected you can enjoy its
            extended lifetime and full potential. Our products have approvals
            from accredited organizations such as ACEA, API, ISO, and JASO as
            well as from OEMs like Volkswagen, Volvo, Mercedes, Renault, and
            more. Our company is ISO certified which means that both our
            internal as well as our external processes meet the high standards
            set by the International Organization for Standardization.
          </p>
        </div>
        <div>
          <h1>Our Products</h1>
        </div>
      </div>

      <div className="product_row">
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
      </div>
    </>
  );
};

export default Product_row;
