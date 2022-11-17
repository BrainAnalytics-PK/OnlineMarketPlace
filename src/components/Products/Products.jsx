import React from "react";
import { Grid } from "@material-ui/core";
import "./ProductStyles.css";
import image1 from "../../assets/18.webp";
import image2 from "../../assets/19.webp";
import image3 from "../../assets/20.webp";
import image4 from "../../assets/21.webp";
import image5 from "../../assets/22.webp";
import image6 from "../../assets/23.webp";
import Product from "./Product";

const Products = () => {
  const productData = [
    {
      id: 1,
      Name: "HeadPhones",
      Category: "Mobile Accessories",
      Ratings: "4.8",
      Price: 1499,
      img: image1,
      desc:"Headphones are a pair of padded speakers which you wear over your ears to listen to a radio or recorded music."
    },
    {
      id: 2,
      Name: "HeadPhones",
      Category: "Mobile Accessories",
      Ratings: "3.8",
      Price: 999,
      img: image2,
      desc:"Headphones are a pair of padded speakers which you wear over your ears to listen to a radio or recorded music." 
    },
    {
      id: 3,
      Name: "HeadPhones",
      Category: "Mobile Accessories",
      Ratings: "4.2",
      Price: 699,
      img: image3,
      desc:"Headphones are a pair of padded speakers which you wear over your ears to listen to a radio or recorded music." 
    },
    {
      id: 4,
      Name: "HeadPhones",
      Category: "Mobile Accessories",
      Ratings: "4.0",
      Price: 899,
      img: image4,
      desc:"Headphones are a pair of padded speakers which you wear over your ears to listen to a radio or recorded music."
    },
    {
      id: 5,
      Name: "HeadPhones",
      Category: "Mobile Accessories",
      Ratings: " 4.8",
      Price: 1000,
      img: image5,
      desc:"Headphones are a pair of padded speakers which you wear over your ears to listen to a radio or recorded music."
    },
    {
      id: 6,
      Name: "HeadPhones",
      Category: "Mobile Accessories",
      Ratings: " 4.8",
      Price: 1000,
      img: image6,
      desc:"Headphones are a pair of padded speakers which you wear over your ears to listen to a radio or recorded music."
    },
  ];

  return (
    <main>
      <Grid container>
        {productData.map((product) => (
          <Grid key={product.id} item xs={6} sm={6} md={2}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
