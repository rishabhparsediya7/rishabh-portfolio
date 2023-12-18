import React from "react";
import c1 from "../images/contact.jpg";

const LazyContact = () => {
  return (
    <div className="flex flex-col">
      <img
        className="relative h-screen w-screen object-cover"
        src={c1}
        alt=""
      />
      <div className="flex flex-col justify-center align-middle absolute m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center text-neutral-50">
        <h1 className="text-5xl w-[20rem] md:w-full md:text-7xl md:mb-0">
          Get in touch with us
        </h1>
        <h3 className="text-xl md:text-2xl md:mb-0">
          We are waiting to work with you.
        </h3>
        <a
          href="#contact"
          className="btn bg-pink-300 rounded-lg m-auto md:w-1/2 w-full text-slate-950 text-2xl mt-10 px-5 py-3"
        >
          Let's start work.
        </a>
      </div>
    </div>
  );
};

export default LazyContact;
