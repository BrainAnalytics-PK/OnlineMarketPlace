import React from "react";
import { Grid } from "@material-ui/core";
import Drawer from "../../modules/Drawer/Drawer";
import { Link } from "react-router-dom";
import "./headerstyles.css";

const Header = () => {
  return (
    <div className="categories-container">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={3}>
          <Drawer />
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <Link to="/Electronics">
            <button className="Categories-btn">Electronics</button>{" "}
          </Link>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <Link to="/Fashion">
            <button className="Categories-btn">Fashion</button>
          </Link>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <Link to="/Health">
            <button className="Categories-btn">Health</button>
          </Link>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <Link to="/Grocery" target="_blank" rel="noopener noreferrer">
            <button className="Categories-btn">Grocery</button>
          </Link>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <Link to="/Beauty">
            <button className="Categories-btn">Beauty</button>
          </Link>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <Link to="/Baby">
            <button className="Categories-btn">Baby</button>
          </Link>
        </Grid>
        <Grid item xs={3} sm={2} md={2}>
          <Link to="/Decor">
            <button className="Categories-btn">Home Decor</button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
