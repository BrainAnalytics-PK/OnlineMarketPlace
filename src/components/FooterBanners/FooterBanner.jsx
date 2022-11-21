import React from "react";
import { Grid } from "@material-ui/core";
import MobileSale from "../../assets/MobileSale.png";
import MenFashion from "../../assets/MenFashion.png";
import WomenFashion from "../../assets/WomenFashion.png";
import Watch from "../../assets/Watch.png";
import Laptop from "../../assets/Laptop.png";
import KidsFashion from "../../assets/KidsFashion.webp";
import Fragrance from "../../assets/fragrance.webp";

import "./FooterBanner.css";

const FooterBanner = () => {
  return (
    <div className="Footer-Banner-Container">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={6}>
          <div className="left-container top">
            <h1 className="Head">Mega Sale on Mobile Phones</h1>
            <p className="Sale-Text">Upto 50% OFF!!</p>
            <img className="left-img mobile" src={MobileSale} alt="" />
          </div>
          <div className="left-container bottom">
            <h1 className="Head">Mega Sale on Pc and Laptops</h1>
            <p className="Sale-Text">Upto 20% OFF!!</p>
            <img className="left-img laptop" src={Laptop} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="mid-container">
            <h4>Luxury Watches</h4>
            <img className="mid-img" src={Watch} alt="" />
          </div>
          <div className="mid-container">
            <h4>Men's Fashion</h4>
            <img className="mid-img" src={MenFashion} alt="" />
          </div>
          <div className="mid-container">
            <h4>Women's Fashion</h4>
            <img className="mid-img" src={WomenFashion} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="right-container">
            <h4>Luxury Watches</h4>
            <img className="right-img" src={Watch} alt="" />
          </div>
          <div className="right-container">
            <h4>Kids Fashion</h4>
            <img className="right-img" src={KidsFashion} alt="" />
          </div>
          <div className="right-container">
            <h4>Fragrances</h4>
            <img className="right-img" src={Fragrance} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterBanner;
