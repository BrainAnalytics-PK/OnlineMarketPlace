import React from "react";
import { Grid } from "@material-ui/core";
import Drawer from  "../../modules/Drawer/Drawer";
import "./headerstyles.css";

const Header = () => {
  return (
    <div className="categories-container">
      <Grid container  spacing={1}>
        <Grid item xs={12} sm={12} md={2}>
          <Drawer/>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <button className="Categories-btn">Electronics</button>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <button className="Categories-btn">Fashion</button>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <button className="Categories-btn">Health</button>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <button className="Categories-btn">Grocery</button>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <button className="Categories-btn">Beauty</button>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <button className="Categories-btn">Baby</button>
        </Grid>
        <Grid item xs={3} sm={2} md={2}>
          <button className="Categories-btn">Home Decor</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
