import React from "react";
import "./products.css";

const Product = (props) => {
  var { image, name, description, price } = props;
  return (
    <>
      <div className="cover_product">
        <div className="img_product">
          <img src={image} alt="" />
        </div>

        <div className="product_info">
          <div className="product_name">
            <h3>{name}</h3>
          </div>

          <div className="product_desc">
            <p>{description}</p>
          </div>

          <div className="product_price">
            <h4>{price}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
