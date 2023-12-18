import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import svideo from "../images/service-video.mp4";
import serviceImage from "../images/service-image.jpg";
import { services } from "../Constants/constants";
import Marquee from "react-fast-marquee";
import { marqueeImages } from "../Constants/constants";
import CustomMarquee from "./CustomMarquee";

const Service = () => {

  return (
    <div>
      <Nav />
      <div className="flex w-full h-full flex-col md:flex-row">
        <div className="md:flex-auto md:m-auto md:w-1/2 h-screen">
          <div className="w-full h-full">
            <img className="w-full h-full" src={serviceImage} alt="" />
            <div className="flex flex-col text-neutral-100 justify-center align-middle top-48 absolute md:w-1/2">
              <h1 className="text-neutral-100 text-5xl p-10">
                From Pixels to Perfection: Capturing Your Essence in Visual
                Brilliance
              </h1>
              <h3 className="px-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, architecto dolor? Quae, expedita quasi! Itaque tenetur
                obcaecati voluptas harum possimus.
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-auto hidden md:block m-auto w-1/2 h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="relative h-screen w-full object-cover"
          >
            <source src={svideo} type="video/mp4" />
          </video>
          <div className="absolute bottom-6">
            <i className="text-6xl text-white bi bi-play-circle-fill ml-4 relative bottom-2"></i>
            <h4 className="text-white text-2xl ml-4 mb-4">
              Defining excellence. Come and let us do that work for you.
            </h4>
            <button className="btn bg-white p-4 ml-4 rounded-md">
              Come and explore...
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full h-full flex-col gap-8 p-12">
        <div className="flex-auto text-center">
          <h2 className="text-6xl text-green-700 mb-5">We Serve</h2>
          <p className="px-10 md:px-24 text-lime-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            voluptate in id ipsam pariatur fugiat, quos aliquid, dolorum
            aspernatur eligendi minima perferendis, aperiam beatae autem alias
            ad sapiente doloremque laborum. Ratione sunt veniam saepe porro
            eligendi tempore debitis reprehenderit vero.
          </p>
        </div>
        <div className="flex-auto">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((e, index) => (
              <div key={index} className="p-10 bg-slate-100 rounded-md">
                <div className="flex mb-4 flex-col text-center">
                  <i className={e.icon}></i>
                  <h4 className="text-4xl text-green-700 font-bold">
                    {e.heading}
                  </h4>
                </div>
                <div className="text-justify md:text-left">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-10">
        <div className="flex justify-center align-middle">
          <h3 className="text-center text-4xl font-semibold mb-10 text-green-700 uppercase tracking-wider">Our Clients</h3>
        </div>
        <div className="px-4 md:px-10 flex">
          <Marquee>
            {marqueeImages.map((e, index) => (
              <CustomMarquee key={index} src={e} />
            ))}
          </Marquee>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
