import React from "react";
import svideo from "../images/service-video.mp4";
import serviceImage from "../images/service-image.jpg";

const LazyService = () => {
  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              architecto dolor? Quae, expedita quasi! Itaque tenetur obcaecati
              voluptas harum possimus.
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
  );
};

export default LazyService;
