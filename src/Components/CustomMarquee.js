import React from "react";
const CustomMarquee = ({ src }) => {
  return (
      <img src={src} className="w-72 md:w-48 h-[10rem] object-cover mx-5" alt="" />
  );
};

export default CustomMarquee;
