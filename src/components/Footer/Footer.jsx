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
import Logo3 from "../../assets/Logo3.svg";

const Footer = () => {
  return (
    <>
      <div className="Footer-Container">
        <Grid container justifyContent="center" spacing={0}>
          <Grid item xs={12} sm={3} md={4}>
            <img src={Logo3} alt="" className="logo-footer" />
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
              <FaFacebook /> <FaInstagramSquare /> <FaTwitterSquare />{" "}
              <FaLinkedin />
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <p className="links">About Us</p>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <p className="links">Contact Us</p>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <p className="links">Careers</p>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <p className="links">Warranty Policy</p>
          </Grid>

          <Grid item xs={3} sm={3} md={1}>
            <p className="links">Sell with us</p>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <p className="links">Privacy Policy</p>
          </Grid>

          <Grid item xs={3} sm={3} md={1}>
            <p className="links">Terms of Sale</p>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <p className="links">Terms of Use</p>
          </Grid>
          <Grid item xs={3} sm={3} md={1}>
            <p className="links">Consumer</p>
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
