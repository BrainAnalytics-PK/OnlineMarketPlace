// To Fetch Data from Back-End
import React from "react";
import { Grid } from "@material-ui/core";
import image1 from "../../assets/Campaign1.jpg";
import image2 from "../../assets/Campaign2.jpg";
import "./campaignStyles.css";

const Campaigns = () => {
  return (
    <main>
      <div className="campaign-container">
        <Grid container justifyContent="center">
          <Grid item xs={6} sm={6} md={6}>
            <div className="card">
              <img src={image1} alt="" className="campaign-img" />
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <div className="card">
              <img src={image2} alt="" className="campaign-img" />
            </div>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default Campaigns;
