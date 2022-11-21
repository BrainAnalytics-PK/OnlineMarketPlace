import React from "react";
import { Grid } from "@material-ui/core";
import GooglePlay from "../../assets/googleplay.png";
import AppStore from "../../assets/appstore.png";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import Logo1 from "../../assets/Logo1.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="Footer-Container">
        <Grid container justifyContent="center" spacing={0}>
          <Grid item xs={12} sm={3} md={4}>
            <Link to="/">
              <img src={Logo1} alt="" className="logo-footer" />
            </Link>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <div className="download-text">
              <p>Shop On The Go</p>
            </div>
            <div className="download-image">
              <img src={GooglePlay} alt="playstore" className="play" />
              <img src={AppStore} alt="appstore" className="app" />
            </div>
          </Grid>
          <Grid item xs={5} sm={5} md={5}>
            <div className="social-media">
              <p>We are Social!!</p>
              <p>Connect With Us</p>
            </div>
            <div className="social-media-icons">
              <FaFacebook /> <FaInstagramSquare /> <FaTwitterSquare />
              <FaLinkedin />
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <Link className="links" to="/AboutUs">
              About Us
            </Link>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <Link className="links" to="/ContactPage">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <Link className="links" to="/Careers">
              Careers
            </Link>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <Link className="links" to="/PrivacyPolicy">
              Privacy Policy
            </Link>
          </Grid>

          <Grid item xs={3} sm={3} md={1}>
            <p className="links">Sell with us</p>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <Link className="links" to="/WarrantyPolicy">
              Warranty Policy
            </Link>
          </Grid>

          <Grid item xs={3} sm={3} md={1}>
            <Link className="links" to="/TermsOfSale">
              Terms Of Sale
            </Link>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <Link className="links" to="/TermsOfUse">
              Terms Of Use
            </Link>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <Link className="links" to="/ConsumerPolicies">
              Consumer
            </Link>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <p id="copy">&copy; 2022 AAIN. All Rights Reserved</p>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
