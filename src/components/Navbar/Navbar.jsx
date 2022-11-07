import React from "react";
import { Grid, Paper, Select, MenuItem } from "@material-ui/core";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import "./Styles.css";

const Navbar = () => {
  return (
    <>
      <Grid container spacing={2}>
        {/* LOGO CONTAINER */}
        <Grid item xs={6} sm={6} md={2}>
          <h1>LOGO</h1>
        </Grid>
        {/* Delivery Location */}
        <Grid item xs={6} sm={6} md={2}>
          <span>
            <b>Deliver To</b>
          </span>
          <MdLocationPin className="icons-location" />
          <Select className="location" label="Set Location">
            <MenuItem value={"PAK"}>Pakistan</MenuItem>
            <MenuItem value={"IND"}>India</MenuItem>
            <MenuItem value={"AFG"}>Afghanistan</MenuItem>
          </Select>
        </Grid>
        {/* Search Bar */}
        <Grid item xs={12} sm={12} md={4}>
          <Paper elevation={2} className="search">
            <input type="text" placeholder="Search Your Favorite Products" />
            <button>Search</button>
          </Paper>
        </Grid>
        {/* Language Selector */}
        <Grid item xs={3} sm={3} md={2}>
          <span>
            <b>Language</b>
          </span>
          &nbsp;
          <Select className=" location" label="Set Language">
            <MenuItem value={"ENG"}>En</MenuItem>
            <MenuItem value={"ARB"}>Ar</MenuItem>
            <MenuItem value={"UR"}>Ur</MenuItem>
          </Select>
        </Grid>
        {/* Cart Settings */}
        <Grid item xs={3} sm={3} md={1}>
          <div className="cart-nav">
            <button className="cart-button">
              <AiOutlineShopping />
              Cart
            </button>
          </div>
        </Grid>
        {/* Sign In Settings */}
        <Grid item xs={3} sm={3} md={1}>
          <div className="signin">
            <button className="signin-button">
              <AiOutlineUser /> SignIn
            </button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
