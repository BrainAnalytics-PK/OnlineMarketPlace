import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Slider from "../../modules/Slider/Slider";
import Campaigns from "../Campaigns/Campaigns";
import Deals from "../DailyDeals/deals";
import TopPicks from "../TopPicks/TopPicks";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import ForYou from "../ForYou/ForYou";
import Products from "../Products/Products";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Slider />
      <Campaigns />
      <Deals />
      <Banner />
      <TopPicks />
      <ForYou />
      <Products />
      <Products />
      <Footer />
    </>
  );
};

export default LandingPage;
