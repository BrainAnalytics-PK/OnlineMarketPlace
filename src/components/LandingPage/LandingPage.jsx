import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Slider from "../../modules/Slider/Slider";
import Campaigns from "../Campaigns/Campaigns";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Slider />
      <Campaigns />
    </>
  );
};

export default LandingPage;
