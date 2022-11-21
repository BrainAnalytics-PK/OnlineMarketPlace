import React from "react";
import "./ForyouStyles.css";
import { Grid } from "@material-ui/core";
import bestseller from "../../assets/bestseller.jpg";
import samsungsale from "../../assets/samsungsale.png";
import applesale from "../../assets/applesale.jpg";

const ForYou = () => {
  return (
    <div className="ForYou-Container">
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <div className="best-deal-container">
          <img src={bestseller} className="best-seller-image" alt="" />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div className="brand-deal-container">
            <img className="brandsale s" src={samsungsale} alt="" />
            <img className="brandsale a" src={applesale} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForYou;
