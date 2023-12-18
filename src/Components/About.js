import React, { Suspense, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./About.css";
import { testiMonials } from "../Constants/constants";
import CustomCard from "./CustomCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Loader from "./Loader";
import LazyAbout from "./LazyAbout";

const About = () => {
  useEffect(()=>{
    document.title='About'
  })
  return (
    <div>
      <Navbar />
      <div>
        <Suspense fallback={<Loader />}>
          <LazyAbout />
        </Suspense>
      </div>
      
      <div className="flex flex-col  m-2 sm:m-10 sm:px-44 bg-indigo-100 py-20">
        <div className="flex justify-center align-middle">
          <h1 className="text-center text-3xl md:text-6xl text-blue-950 mb-10 uppercase tracking-wider">
            Testimonials
          </h1>
        </div>
        <div className="flex md:w-full w-screen px-10 md:px-0">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {testiMonials.map((e, index) => (
              <SwiperSlide key={index}>
                <CustomCard data={e} />
              </SwiperSlide>
            ))}

            <div className="slider-controler">
              <div className="swiper-button-prev bg-white/50 p-10 slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next bg-white/50 p-10 slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
