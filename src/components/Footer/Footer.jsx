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

const Footer = () => {
  return (
    <>
      <div className="Footer-Container">
        <Grid container>
          <Grid item xs={2} sm={2} md={2}>
            <h2>LOGO</h2>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <div className="download-text">
              <p>Shop On The Go</p>
            </div>
            <div className="download-image">
              <img src={GooglePlay} alt="playstore" className="play" />
              <img src={AppStore} alt="appstore" className="app" />
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <div className="social-media">
              <p>We are Social!!</p>
              <p>Connect With Us</p>
            </div>
            <div className="social-media-icons">
              <FaFacebook /> <FaInstagramSquare /> <FaTwitterSquare />{" "}
              <FaLinkedin />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
