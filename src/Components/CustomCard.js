import React from "react";
import image from "../images/2.jpg";
const CustomCard = ({ data }) => {
  return (
    <div className="flex flex-col border-cyan-950 w-96 p-8 flex-shrink-1 rounded-md">
      <div className="flex">
        <div className="">
          <img className="h-20 w-20 rounded-full" src={image} alt="" />
        </div>
        <div className="flex flex-col ml-2 m-auto">
          <div className="text-2xl">{data.heading}</div>
          <div className="text-xl">{data.place}</div>
        </div>
      </div>
      <div className="flex flex-grow py-2">
        <p className="text-justify">{data.desc}</p>
      </div>
      <div className="flex font-bold gap-3 absolute bottom-8">
        <div className="">
          <i className="bi bi-calendar font-"></i>
        </div>
        <div className="italic">{data.date}</div>
      </div>
    </div>
  );
};

export default CustomCard;
