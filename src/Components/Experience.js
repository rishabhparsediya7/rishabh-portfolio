import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <div className="container experience" id="experience">
      <div className="animate-charcter">experience</div>
      <div className="box">
        <div className="experience1">
          <p>
            <i className="fa fa-briefcase" aria-hidden="true"></i>
          </p>
          <h1>Sofwtare Engineer</h1>
          <h3>Persistent Systems</h3>
          <h4>Gurgaon, Haryana, India</h4>
        </div>
        <div className="experience2">
          <h1>Sofwtare Engineer Intern</h1>
          <h3>Persistent Systems</h3>
          <h4>Pune, Maharashtra, India</h4>
          <p>
            <i className="fa fa-briefcase" aria-hidden="true"></i>
          </p>
        </div>
        <div className="experience3">
          <p>
            <i className="fa fa-briefcase" aria-hidden="true"></i>
          </p>
          <h1>Sofwtare Engineer Intern</h1>
          <h3>Virtusa</h3>
          <h4>Chennai, Tamil Nadu, India</h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
