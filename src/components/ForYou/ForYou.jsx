import React from "react";
import "./ForyouStyles.css";
import { Grid } from "@material-ui/core";
import bestseller from "../../assets/bestseller.jpg";
import samsungsale from "../../assets/samsungsale.png";
import applesale from "../../assets/applesale.jpg"

const ForYou = () => {
  return (
    <div className="ForYou-Container">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={6}>
          <h1>For You</h1>
          <div className="topselling">
           <img src={bestseller} className="best-seller-image"alt="" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="topselling" >
            <img src={samsungsale}className="brandsale" alt="" />
          </div>
          <div className="topselling">
            <img src={applesale}className="brandsale" alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForYou;
