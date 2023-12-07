import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import "../CSS/Skills.css";
import "../CSS/heading.css";
import ListViewContainer from "./ListViewContainer";
import CustomCircularBar from "./CustomCircularBar";
import { skills } from "../Constants";

const Skills = () => {
  const [listView, setListView] = useState(false);
  const ListView = "List View";
  const CircularView = "Circular View";
  const [techvalues, setTechValues] = useState([]);
  useEffect(() => {
    const newArray = [];
    skills.map((e) => {
      const temp = e.values;
      temp.forEach((v) => newArray.push(v));
    });
    setTechValues(newArray);
  }, []);
  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="animate-charcter">Skills</div>
        <div className="toggle-switch">
          <button className="btn w-100" onClick={() => setListView(!listView)}>
            Switch to {!listView ? ListView : CircularView}
          </button>
        </div>
        {listView ? (
          <ListViewContainer skills={skills} />
        ) : (
          <CustomCircularBar skills={techvalues} />
        )}
      </div>
    </div>
  );
};

export default Skills;
