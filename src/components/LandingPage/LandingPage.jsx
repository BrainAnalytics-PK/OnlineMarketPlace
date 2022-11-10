import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Slider from "../../modules/Slider/Slider";
import Campaigns from "../Campaigns/Campaigns";
import Deals from "../DailyDeals/deals";
import TopPicks from "../TopPicks/TopPicks";
import Banner from "../Banner/Banner";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Slider />
      <Campaigns />
      <Deals />
      <TopPicks />
      <Banner />
    </>
  );
};

export default LandingPage;
