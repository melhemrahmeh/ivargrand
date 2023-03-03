import React from "react";
import Product from "./Product";
import { data } from "./data";
import "./Product_row.css";

const Product_row = () => {
  return (
    <>
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
