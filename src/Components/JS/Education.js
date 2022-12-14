import React from "react";
import "../CSS/Education.css";
import "../CSS/heading.css";
const Education = () => {
  return (
    <div className="education-section" id="education">
      <div className="container">
        <div className="animate-charcter">EDUCATION</div>
        <section className="education">
          <div className="content-wrap item-details">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <section>
                  <h3>B. Tech in Computer Science</h3>
                  <p>IPS College of Technology and Management</p>
                  <p>Aug, 2018 - June, 2022</p>
                  <p>Score - 8.78 CGPA</p>
                </section>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <section>
                  <h3>XII Standard</h3>
                  <p>The Radiant School</p>
                  <p>April, 2016 - April,2017</p>
                  <p>Score - 71.2 %</p>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <section>
                  <h3>X Standard</h3>
                  <p>The Radiant School</p>
                  <p>April, 2014 - April,2015</p>
                  <p>Score - 79.8 %</p>
                </section>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
