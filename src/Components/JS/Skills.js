import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../CSS/Skills.css";
import "../CSS/heading.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import Progress from "react-progressbar";
const Skills = () => {
  const [listView, setListView] = useState(false);
  const ListView = "List View";
  const CircularView = "Circular View";
  const skills = [
    { name: "Java", percentage: "80", image: "images/java.png" },
    { name: "Spring Boot", percentage: "60", image: "images/spring-boot.png" },
    { name: "React", percentage: "70", image: "images/react.png" },
    { name: "HTML", percentage: "90", image: "images/html.png" },
    { name: "CSS", percentage: "80", image: "images/css.png" },
    { name: "BootStrap", percentage: "60", image: "images/bs.png" },
    { name: "JS", percentage: "60", image: "images/js.png" },
    { name: "Python", percentage: "60", image: "images/python.png" },
    { name: "Django", percentage: "60", image: "images/django.png" },
    { name: "SQL", percentage: "50", image: "images/sql.png" },
    { name: "Google Cloud", percentage: "40", image: "images/gcp.png" },
  ];
  console.log(listView);

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
          <div className="listView">
            {skills.map((e, index) => (
              <MDBCard
                style={{ width: "100%", height: "200px", margin:"10px", display:"flex", justifyContent:"center" }}
                key={index}
              >
                <MDBRow className="g-0">
                  <MDBCol md="4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <MDBCardImage
                      src={e.image}
                      alt="..."
                      
                      style={{width:"150px", height:"150px"}}
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody>
                      <MDBCardTitle>{e.name}</MDBCardTitle>
                      {/* <MDBCardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </MDBCardText> */}
                      <MDBCardText>
                        <Progress completed={e.percentage} />
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
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
                  style={{ height: "300px", width: "300px", padding: "20px" }}
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
