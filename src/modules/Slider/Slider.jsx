import React from "react";
import { Grid } from "@material-ui/core";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";

import "./sliderStyles.css";

const Slider = () => {
  const Images = [{ url: image4},{ url: image2 },{ url: image1 }, { url: image3 }, ];
  return (
    <Grid container justify="center">
      <div className="slider">
          <SimpleImageSlider
            width={1350}
            height={350}
            images={Images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            slideDuration={0.7}
          ></SimpleImageSlider>
      </div>
    </Grid>
  );
};

export default Slider;
