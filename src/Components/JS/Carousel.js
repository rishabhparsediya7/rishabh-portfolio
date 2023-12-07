import React, { useEffect } from "react";
import "../CSS/carousel.css";
import { certifications } from "../Constants";
import { useState } from "react";
import CustomCardCertification from "./CustomCardCertification";

const Carousel = () => {
  const [activeItems, setActiveItems] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  useEffect(() => {
    let s = 2;
    const newArray = certifications.slice(start, end).map((e, index) => {
      const cname = index <= 2 ? `level${s--}` : `level${s++}`;
      if (s < 0) {
        s = 1;
      }
      return {
        ...e,
        cname,
      };
    });
    setActiveItems(newArray);
  }, [start, end, certifications]);
  console.log(activeItems);
  const moveleft = () => {
    if (start - 1 >= 0) {
      setStart(start - 1);
      setEnd(end - 1);
      setActiveItems(certifications.slice(start, end));
    }
  };
  const moveright = () => {
    if (end + 1 <= certifications.length) {
      setStart(start + 1);
      setEnd(end + 1);

      setActiveItems(certifications.slice(start, end));
    }
    console.log(start + "-" + end);
  };
  return (
    <div id="carousel">
      <div className="arrow" onClick={() => moveleft()}>
        <i class="bi bi-chevron-left"></i>
      </div>
      <div className="main-container">
        {activeItems.map((e, index) => (
          <div key={index} className={e.cname === undefined ? "" : e.cname}>
            <CustomCardCertification data={e}/>
          </div>
        ))}
      </div>
      <div className="arrow" onClick={() => moveright()}>
        <i class="bi bi-chevron-right"></i>
      </div>
    </div>
  );
};

export default Carousel;
