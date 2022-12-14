import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../CSS/Skills.css";
import "../CSS/heading.css";

import Progress from 'react-progressbar';
const Skills = () => {
  const [listView, setListView] = useState(false);
  const ListView="List View";
  const CircularView="Circular View";
  const skills = [
    { name: "Java", percentage: "80" },
    { name: "Spring Boot", percentage: "60" },
    { name: "HTML", percentage: "90" },
    { name: "CSS", percentage: "80" },
    { name: "BootStrap", percentage: "60" },
    { name: "JS", percentage: "60" },
    { name: "Python", percentage: "60" },
    { name: "Django", percentage: "60" },
    { name: "SQL", percentage: "50" },
    { name: "Google Cloud", percentage: "40" },
  ];
  console.log(listView);

  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="animate-charcter">Skills</div>
        <div className="toggle-switch">
          <button className="btn w-100" onClick={() => setListView(!listView)}>
            Switch to {!listView?ListView:CircularView}
          </button>
        </div>
        {listView ? (
          <div className="listView">
            {skills.map((e, index) => (
              <div className="row d-flex justify-content-center align-items-center" key={index}>
                <div className="col text-center text-capitalize" style={{fontSize:"25px"}}>{e.name}</div>
                <div className="col">
                  <Progress completed={e.percentage} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            {skills.map((e, index) => (
              <div
                className="col"
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ height: "200px", width: "200px", padding: "20px" }}
                >
                  <CircularProgressbar
                    value={e.percentage}
                    text={e.name}
                    styles={buildStyles({
                      textColor: "var(--text-primary)",
                      pathColor: "var(--text-primary)",
                      trailColor: "var(--text-secondary)",
                      textSize: "14px",
                    })}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
