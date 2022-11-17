import React from "react";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

import "./sliderStyles.css";

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
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
        <SwiperSlide>
          <img className="Slide" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="Slide" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="Slide" src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="Slide" src={image4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
