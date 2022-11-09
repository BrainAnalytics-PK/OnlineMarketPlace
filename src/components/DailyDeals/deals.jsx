import React from "react";
import { Grid } from "@material-ui/core";
import "./dailyDealsStyles.css";
import image4 from "../../assets/4.webp";
import image5 from "../../assets/5.webp";
import image6 from "../../assets/6.webp";
import image7 from "../../assets/7.webp";

const Deals = () => {
  return (
    <div className="deals-container">
      <h3>Deals Of the Day!!!!</h3>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={2} sm={2} md={2}>
          <div className="deal-card">
            <h3>Speacial Deals on Headphone Accessories</h3>
            <img className="deals-container-img" src={image4} alt="" />
            <p>
              Before <strike>$299</strike>
            </p>
            <p>
              Now <b>$199</b>
              <br /> <br />
            </p>
          </div>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <div className="deal-card">
            <h3>Speacial Deals on Headphone Accessories</h3>
            <img className="deals-container-img" src={image5} alt="" />
            <p>
            
              Before <strike>$299</strike>
            </p>
            <p>
              Now <b>$199</b>
            </p>
          </div>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <div className="deal-card">
            <h3>Speacial Deals on Headphone Accessories</h3>
            <img className="deals-container-img" src={image6} alt="" />
            <p>
         
              Before <strike>$299</strike>
            </p>
            <p>
              Now <b>$199</b>
            </p>
          </div>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <div className="deal-card">
            <h3>Speacial Deals on Headphone Accessories</h3>
            <img className="deals-container-img" src={image7} alt="" />
            <p>
        
              Before <strike>$299</strike>
            </p>
            <p>
              Now <b>$199</b>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Deals;
