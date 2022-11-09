import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Slider from "../../modules/Slider/Slider";
import Campaigns from "../Campaigns/Campaigns";
import Deals from "../DailyDeals/deals";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Slider />
      <Campaigns />
      <Deals />
    </>
  );
};

export default LandingPage;
