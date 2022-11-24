import React from "react";
import { Grid } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./CartStyles.css";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2 className="cart-heading">Cart</h2>
        <h3 className="cart-heading">Your Items Below</h3>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid container>
          <Link to="/">
            <button className="c-shop">Continue Shopping!!</button>
          </Link>
          <button className="check-out">Check Out</button>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
