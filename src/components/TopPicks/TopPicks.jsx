import React from "react";
import { Grid } from "@material-ui/core";
import "./TopPickStyles.css";

const TopPicks = () => {
  return (
    <>
      <div className="Top-Picks-Container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div>
              <h2>Top Picks!!</h2>
            </div>
          </Grid>
          
          <Grid item xs={6} sm={4} md={2}>
            <div className="Top-Picks-Card">
              <h2>Mobile Phones</h2>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div className="Top-Picks-Card">
              <h2>Laptops</h2>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div className="Top-Picks-Card">
              <h2>Televions</h2>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div className="Top-Picks-Card">
              <h2>Perfumes</h2>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div className="Top-Picks-Card">
              <h2>Gaming Consoles</h2>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <div className="Top-Picks-Card">
              <h2>Home Decor</h2>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TopPicks;
