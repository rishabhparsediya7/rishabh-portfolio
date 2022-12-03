import React from "react";
import "./Certification.css";
const Certification = () => {
  const certifications = [
    {
      name: "Microsoft Certified Azure Fundamentals",
      mains: "Microsoft Cloud",
      description:
        " I have completed the Microsoft Course of Azure Fundamental and performed well and gained good scores, in which I got understanding and fundamentals of cloud.",
      image: "certificates/1.jpg",
    },
    {
      name: "Neural Hack Coding Competition",
      mains: "Virtusa, Chennai",
      description:
        "Got into coding competition and gained the placement opportunity from Virtusa.",
      image: "certificates/2.jpg",
    },
    {
      name: "State Level Hackathon",
      mains: "Rajiv Gandhi Prodhugiki Vishwavidhyalaya, Bhopal",
      description:
        "We as a team, gave a solution in Medical and Healthcare sector, that provides users an extra facility to become advanced with medications, health checkups, and much more",
      image: "certificates/3.jpg",
    },
    {
      name: "Java HackerRank",
      mains: "HackerRank",
      description:
        "HackerRank certified Core Java, where I performed some coding questions and earned this certificate.",
      image: "certificates/4.jpg",
    },
    {
      name: "MongoDB Certifiate",
      mains: "Official MongoDB University",
      description:
        "I got into a course provided by MongoDB University and after that completion of course, I earned this certificate followed by a test from Official MongoDB.",
      image: "certificates/5.jpg",
    },
    {
      name: "Core Java Training",
      mains: "Binary Systems",
      description: "Got a training in Core Java and got this certificate.",
      image: "certificates/7.jpg",
    },
    {
      name: "Web Developer: Internship Certificate",
      mains: "Sahu Technologies",
      description:
        "I got into an internship from Sahu technologies and got this certificate.",
      image: "certificates/8.jpg",
    },
    {
      name: "SQL and Database",
      mains: "Udemy",
      description:
        "I got the course from Udemy for this wonderful content of SQL, where I performed some hands on with SQL.",
      image: "certificates/10.jpg",
    },
  ];

  return (
    <div className="certifications" id="certification">
      <div className="container">
        <div className="parent">
          <div className="div1">
            <div className="animate-character">Certifications</div>
          </div>
          <div className="div2">
            <ul className="list-group">
              {certifications.map((e, index) => (
                <li className="list-group-item" key={index}>
                  <div className="list-parent">
                    <div className="child1">
                      <img src={e.image} alt="" />
                    </div>
                    <div className="child2">
                      <div className="certi-heading">{e.name}</div>
                      <div className="organizer"> <strong>From :</strong>  {e.mains}</div>
                    </div>
                    <div className="child3">
                    {e.description} 
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
