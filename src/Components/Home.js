import React, { Suspense, useEffect } from "react";
import Navbar from "./Navbar";
import bgvideo from "../images/bg_video.mp4";
import Footer from "./Footer";
import Loader from "./Loader";

const Home = () => {
  const arr = [
    ["a", "Graphic Designing"],
    ["b", "Brochures"],
    ["c", "Web Development"],
    ["d", "Social Media Marketing"],
    ["e", "Social Handle"],
  ];
  useEffect(()=>{
    document.title='Home'
  },[])
  return (
    <div>
      <Navbar />
      <div className="">
        <div>
          <Suspense fallback={<Loader />}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="relative top-0 h-screen w-full object-cover opacity-50"
            >
              <source src={bgvideo} type="video/mp4" />
            </video>
          </Suspense>
        </div>

        <div className="flex flex-col lg:flex-row justify-center align-middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:px-16 py-2 text-gray-900 text-center lg:text-left">
          <div className="flex-1 md:ml-6 mb-10">
            <p className="text-black text-4xl sm:text-6xl text-animation">
              You can rely on US. <br />
              <span className="text-2xl md:text-3xl span-text-animation">
                Where Art Meets Function: <br /> Crafting Aesthetically with a
                Purpose
              </span>
            </p>
          </div>
          <div className="flex-1 text-center lg:text-left home-tagline">
            <p className="mb-8 px-10 md:p-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              laudantium consequatur facilis molestias quos. Vero harum nobis
              corrupti laudantium fuga!.
            </p>
            <button className="bg-transparent text-gray py-2 border-2 border-gray-900 px-6">
              Read more...
            </button>
          </div>
        </div>
        <div className="md:p-10">
          <div className="flex flex-col lg:flex-row justify-center align-middle w-full h-screen md:px-16 py-10 text-center lg:text-left bg-slate-200">
            <div className="flex-1 m-auto w-3/4 ">
              <sup>1.</sup>
              <span className="text-base">What we work In?</span>
              <p className="text-5xl leading-[4rem] md:text-left text-center sm:text-6xl text-red-300 mb-3">
                Designing <strong>&</strong> Development
              </p>
              <p className="italic mb-6">
                "From Pixels to Perfection: Capturing Your Essence in Visual
                Brilliance."
              </p>
              <button className="bg-transparent text-gray py-6 border-2 border-gray-900 px-10 text-xl">
                Take me there <i className="bi bi-arrow-right text-xl ml-6"></i>
              </button>
            </div>
            <div className="flex-1 m-auto w-3/4">
              <ul className="flex flex-col px-2 md:px-12 text-left">
                {arr.map((e, index) => (
                  <li
                    key={index}
                    className="text-3xl sm:text-5xl text-gray-800 py-2"
                  >
                    <sup className="text-base italic mr-1 mb-2">{e[0]}</sup>
                    {e[1]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
