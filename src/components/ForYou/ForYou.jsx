import React from "react";
import "./ForyouStyles.css";
import { Grid } from "@material-ui/core";
import FY1 from "../../assets/FY1.png";
import FY2 from "../../assets/FY2.png";
import FY3 from "../../assets/FY3.png";

const ForYou = () => {
  return (
    <div className="ForYou-Container">
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <div className="best-deal-container">
          <img src={FY3} className="best-seller-image" alt="" />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div className="brand-deal-container">
            <img className="brandsale" src={FY2} alt="" />
            <img className="brandsale" src={FY1} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForYou;
