import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import Logo1 from "../../assets/Logo1.svg";
import Location from "../../assets/Location.png";
import { Link } from "react-router-dom";

import "./Styles.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Grid container>
          {/* LOGO CONTAINER */}
          <Grid item xs={12} sm={12} md={1}>
            <Link to="/">
              <img src={Logo1} className="logo" alt="" />
            </Link>
          </Grid>
          {/* Delivery Location */}
          <Grid item xs={6} sm={6} md={1}>
            <img src={Location} alt="" className="location-image" />
            <select name="Location" className="location">
              <option value="PAK" defaultChecked>
                PAK
              </option>
              <option value="IND">IND</option>
              <option value="AFG">AFG</option>
            </select>
          </Grid>
          {/* Search Bar */}
          <Grid item xs={12} sm={12} md={7}>
            <Paper elevation={2} className="search">
              <input type="text" placeholder="Search Your Favorite Products" />
              <button>
                <AiOutlineSearch />
              </button>
            </Paper>
          </Grid>
          {/* Language Selector */}
          <Grid item xs={3} sm={3} md={1}>
            <div className="language-container">
              <select name="Location" className="location">
                <option value="ENG" defaultChecked>
                  EN
                </option>
                <option value="ARB">AR</option>
                <option value="UR">UR</option>
              </select>
            </div>
          </Grid>
          {/* Cart Settings */}
          <Grid item xs={3} sm={3} md={1}>
            <div className="cart-nav">
              <Link to="/Cart">
                <button className="cart-button">
                  Cart <br />
                  <TiShoppingCart className="cart" />
                </button>
              </Link>
            </div>
          </Grid>
          {/* Sign In Settings */}
          <Grid item xs={4} sm={3} md={1}>
            <div className="signin">
              <Link to="LoginPage">
                <button className="signin-btn">
                  Sign in <br />
                  <AiOutlineUser />
                </button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Navbar;
