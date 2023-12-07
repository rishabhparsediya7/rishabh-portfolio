import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const CustomCircularBar = ({ skills }) => {
  return (
    <div className="row">
      {skills.map((e, index) => (
        <div
          className="col col-md-2"
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <div style={{ height: "200px", width: "200px", padding: "20px" }}>
            <div className="inside-image">
              <img src={e.image} alt="" />
            </div>
            <CircularProgressbar
              value={e.percentage}
              // text={e.name}
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
  );
};

export default CustomCircularBar;
