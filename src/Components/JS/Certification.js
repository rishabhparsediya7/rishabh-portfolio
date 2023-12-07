import React from "react";
import "../CSS/Certification.css";
import "../CSS/heading.css";
import Carousel from "./Carousel";

const Certification = () => {

  return (
    <div className="certifications" id="certification">
      <div className="container">
        <div className="parent">
          <div className="div1">
            <div className="animate-character">Certifications</div>
          </div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Certification;
//  <ul className="list-group div2 d-flex flex-row">
//   {certifications.map((e, index) => (
//     <li className="list-group-item" key={index}>
//       <div className="list-parent">
//         <div className="child1">
//           <img src={e.image} alt="" />
//         </div>
//         <div className="child2">
//           <div className="certi-heading">{e.name}</div>
//           <div className="organizer">
//             <strong>From :</strong> {e.mains}
//           </div>
//         </div>
//         <div className="child3">{e.description}</div>
//       </div>
//     </li>
//   ))}
// </ul>
