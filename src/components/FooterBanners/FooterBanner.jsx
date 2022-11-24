import React from "react";
import { Grid } from "@material-ui/core";
import FB1 from "../../assets/fb1.png";
import FB2 from "../../assets/fb2.png";
import FB3 from "../../assets/fb3.png";
import FB4 from "../../assets/fb4.png";

import "./FooterBanner.css";

const FooterBanner = () => {
  return (
    <div className="Footer-Banner-Container">
      <h2 className="FB-Heading">MIND BLOWING DEALS!!!</h2>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={4}>
          <div className="Img-Container">
            <img src={FB1} alt="" className="FB-Images" />
            <img src={FB2} alt="" className="FB-Images" />
            <img src={FB3} alt="" className="FB-Images" />
            <img src={FB4} alt="" className="FB-Images" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className="Img-Container">
            <img src={FB1} alt="" className="FB-Images" />
            <img src={FB2} alt="" className="FB-Images" />
            <img src={FB3} alt="" className="FB-Images" />
            <img src={FB4} alt="" className="FB-Images" />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <div className="Img-Container">
            <img src={FB1} alt="" className="FB-Images" />
            <img src={FB2} alt="" className="FB-Images" />
            <img src={FB3} alt="" className="FB-Images" />
            <img src={FB4} alt="" className="FB-Images" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterBanner;
