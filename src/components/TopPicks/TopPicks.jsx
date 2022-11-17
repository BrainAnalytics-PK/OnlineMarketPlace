import React from "react";
// import { Grid } from "@material-ui/core";
import "./TopPickStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import TopPickCard from "./TopPickCard";

// Import Swiper styles

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import image1 from "../../assets/31.webp";
import image2 from "../../assets/32.webp";
import image3 from "../../assets/13.webp";
import image4 from "../../assets/30.webp";
import image5 from "../../assets/14.webp";
import image6 from "../../assets/15.webp";
import image7 from "../../assets/16.webp";
import image8 from "../../assets/17.webp";
import image9 from "../../assets/26.webp";
import image10 from "../../assets/27.webp";
import image11 from "../../assets/28.webp";
import image12 from "../../assets/29.webp";

const TopPicks = () => {
  const TopPickData = [
    {
      id: 1,
      image: image1,
      title: "Top Selling",
    },
    {
      id: 2,
      image: image2,
      title: "Top Selling",
    },
    {
      id: 3,
      image: image3,
      title: "Top Selling",
    },
    {
      id: 4,
      image: image4,
      title: "Top Selling",
    },
    {
      id: 5,
      image: image5,
      title: "Top Selling",
    },
    {
      id: 6,
      image: image6,
      title: "Top Selling",
    },
    {
      id: 7,
      image: image7,
      title: "Top Selling",
    },
    {
      id: 8,
      image: image8,
      title: "Top Selling",
    },
    {
      id: 9,
      image: image9,
      title: "Top Selling",
    },
    {
      id: 10,
      image: image10,
      title: "Top Selling",
    },
    {
      id: 11,
      image: image11,
      title: "Top Selling",
    },
    {
      id: 12,
      image: image12,
      title: "Top Selling",
    },
  ];
  return (
    <>
      <div className="top-picks-container">
        <h2>Top Picks</h2>
        <Swiper
          slidesPerView={6}
          spaceBetween={60}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="top-pick-card">
            {TopPickData.map((topPick) => (
              <SwiperSlide key={topPick.id}>
                <TopPickCard toppick={topPick} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default TopPicks;
