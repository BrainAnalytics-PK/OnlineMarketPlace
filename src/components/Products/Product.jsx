import React from "react";
import { Grid } from "@material-ui/core";
import { AiTwotoneStar } from "react-icons/ai";

const Product = ({ product }) => {
  return (
    <div className="Product-Container">
      <Grid container spacing={2}>
        <div className="card-container">
          <img src={product.img} alt="" />
          <h4 className="product-name">{product.Name}</h4>
          <p className="product-desc">
            <b>Description: </b>
            {product.desc}
          </p>
          <p className="product-price">
            <b>PKR: </b>
            Rs. {product.Price}
          </p>
          <p className="product-ratings">
            <b>Ratings: </b>
            {product.Ratings}  
            <AiTwotoneStar className="rating-star" />
            <AiTwotoneStar className="rating-star"/>
            <AiTwotoneStar className="rating-star"/>
            <AiTwotoneStar className="rating-star"/>
          </p>
        </div>
      </Grid>
    </div>
  );
};

export default Product;
