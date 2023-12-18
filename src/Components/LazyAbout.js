import React from "react";
import about from "../images/about.jpg";
import Typewriter from "typewriter-effect";
import "./About.css";

const LazyAbout = () => {
  return (
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
            dignissimos quaerat odio magnam laborum. Accusantium voluptatum non
            minima voluptate ea!
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
  );
};

export default LazyAbout;
