import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import "./Styles.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Grid container spacing={1}>
        {/* LOGO CONTAINER */}
        <Grid item xs={6} sm={6} md={1}>
          <h1>LOGO</h1>
        </Grid>
        {/* Delivery Location */}
        <Grid item xs={6} sm={6} md={1}>
          <MdLocationPin className="icons-location" />
          <select name="Location" className="location">
            <option value="PAK" defaultChecked>PAK</option>
            <option value="IND">IND</option>
            <option value="AFG">AFG</option>
          </select>
        </Grid>
        {/* Search Bar */}
        <Grid item xs={12} sm={12} md={7}>
          <Paper elevation={2} className="search">
            <input type="text" placeholder="Search Your Favorite Products" />
            <button>Search</button>
          </Paper>
        </Grid>
        {/* Language Selector */}
        <Grid item xs={3} sm={3} md={1}>
        <select name="Location" className="location">
            <option value="ENG" defaultChecked>EN</option>
            <option value="ARB">AR</option>
            <option value="UR">UR</option>
          </select>
        </Grid>
        {/* Cart Settings */}
        <Grid item xs={3} sm={3} md={1}>
          <div className="cart-nav">
            <button className="cart-button">
              <AiOutlineShopping />
              <br />
              Cart
            </button>
          </div>
        </Grid>
        {/* Sign In Settings */}
        <Grid item xs={4} sm={3} md={1}>
          <div className="signin">
            <button className="signin-button">
              <AiOutlineUser />
              <br /> SignIn
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
