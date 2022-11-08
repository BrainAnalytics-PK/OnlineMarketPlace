import React from "react";
import { Grid, Paper } from "@material-ui/core";
import image1 from "../../assets/1.webp";
import image2 from "../../assets/2.webp";
import image3 from "../../assets/3.webp";
import "./campaignStyles.css";

const Campaigns = () => {
  return (
    <Grid container justify="center" spacing={0}>
      {/* Flash Sale Container */}
      <Grid item xs={12} sm={12} md={12}>
        <div className="campaign-title">
          <h2>Campaigns</h2>
          <h3>Flash SALE!!!</h3>
          <p>Upto 70% OFF!!! Hurry Up till Stock </p>
        </div>
      </Grid>
      {/*  Sale Cards */}
      <Grid item xs={4} sm={4} md={4}>
        <Paper elevation={2}>
          <div className="campaign-cards">
          <p>Amazing Deals on Mobile Accessories</p>
          <img className="campaign-img" src={image2} alt="pro" />
          <button>Buy Now!</button>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Paper elevation={2}>
        <div className="campaign-cards">
          <p>Amazing Deals on Mobile Accessories</p>
          <img className="campaign-img" src={image1} alt="pro" />
          <button>Buy Now!</button>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Paper elevation={2}>
        <div className="campaign-cards">
          <p>Amazing Deals on Mobile Accessories</p>
          <img className="campaign-img" src={image3} alt="pro" />
          <button>Buy Now!</button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Campaigns;
