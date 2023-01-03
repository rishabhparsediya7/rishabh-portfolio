import "../CSS/Experience.css";
import "../CSS/heading.css";
import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
const Experience = () => {

  const experience=[
    {
      title:"Software Engineer",
      company: "Persistent Systems",
      from:"July, 2022",
      to:"Current",
      heading:"Working on Google Cloud Platform with the Engineering Team to gain hands-on experience in GCP Console, Shell with Java Development. Was working with Spring, Spring MVC, SQL, and React."
    },{
      title:"Software Engineer Intern",
      company: "Persistent Systems",
      from:"Feb, 2022",
      to:"July, 2022",
      heading:"Learned about Java and Spring Development. Worked on APIs development with spring boot and performed hands-on React Assignment."

    },{
      title:"Software Engineer Intern",
      company: "Virtusa",
      from:"December, 2021",
      to:"Feb, 2022",
      heading:"Got the knowledge on Generic Classes and gained hands-on experience in Development in Python and Java."
    }
  ]
  return (
    <div className="container" id="experience">
      <div className="animate-charcter">Experience</div>
      
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {experience.map((e, index)=>(
          <MDBCol key={index} className='experience-box lazy'>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle style={{fontWeight:"bold"}}>{e.title} </MDBCardTitle>
                <MDBCardTitle >{e.company}</MDBCardTitle>
                <MDBCardTitle style={{fontStyle:"italic"}}>{e.from} - {e.to}</MDBCardTitle>
                <MDBCardText>
                {e.heading}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
      
        ))}
       </MDBRow>
    </div>
  );
};

export default Experience;
