import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Slider from "../../modules/Slider/Slider";
import Campaigns from "../Campaigns/Campaigns";
import Deals from "../DailyDeals/deals";
import TopPicks from "../TopPicks/TopPicks";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
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
      <Footer />
    </>
  );
};

export default LandingPage;
