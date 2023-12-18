import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import about from "../images/about.jpg";
import Typewriter from "typewriter-effect";
import "./About.css";
import { testiMonials } from "../Constants/constants";
import CustomCard from "./CustomCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="flex w-full h-full flex-col md:flex-row">
        <div className="z-10 md:flex-auto md:m-auto md:w-1/2 h-screen">
          <div
            className="flex flex-col gap-3 text-blue-950 justify-center align-middle px-6 md:px-12 absolute top-[10rem] 
          md:w-1/2"
          >
            <h2 className="text-6xl md:text-8xl">
              <span className="text-5xl">We Are</span>
              <Typewriter
                options={{
                  strings: ["Thinking", "Designing", "Innovating"],
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.pauseFor(1000).deleteAll().start();
                }}
              />
            </h2>
            <p className="w-full text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              dignissimos quaerat odio magnam laborum. Accusantium voluptatum
              non minima voluptate ea!
            </p>
            <button className="btn bg-blue-800 text-white w-full md:w-48 rounded-md px-6 py-2">
              Get to know
            </button>
          </div>
        </div>
        <div className="absolute md:relative md:flex-auto md:m-auto md:w-1/2 h-screen service">
          <div className="flex justify-center align-middle">
            <img
              className="relative h-screen w-full object-cover"
              src={about}
              alt=""
            />
          </div>
        </div>
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
