import React, { useState } from "react";
import Education from "./Education";
import "../CSS/Projects.css";
import "../CSS/heading.css";
const Projects = () => {
  const pro = [
    {
      name: "HR Management Systems",
      languages: "Python, Django, HTML, CSS, Firestore",
      description:
        "A Django Framework based Web App that records all the forms filled by the employees for the projects, records the companies information. It is integrated with a payment gateway that is used through RazorPay Payment Gateway. Database is used as firebase, as it is a live realtime database.",
      image: "images/1.jpg",
    },
    {
      name: "Digital Medical Diagnosis",
      languages: "Python, Django, HTML, CSS, SQL, Firestore",
      description:
        "It is a software that solves real-time problems and helps the users to get to know about their diseases and their severities. A user just has to upload an image of his her X-ray and the software is built in such a way that It can recognize its corresponding results",
      image: "images/2.jpg",
    },
    {
      name: "Java Spring Boot Messaging Application",
      languages: "Java, Spring Boot, Thymeleaf, Firebase, HTML, CSS, BootStrap",
      description:
        "A project based on Spring Boot, Thymeleaf and Firebase which integrates with Twilio Messaging Service used to send SMS on phone. It records all the OTP requests being made and stored them in the firebase. It holds a static JSON file which loads all the static contacts.",
      image: "images/3.jpg",
    },
    {
      name: "REST APIs for Blogs",
      languages: "Java, Spring Boot, JPA, SQL",
      description:
        "A RestAPI project developed for the blogs. We can perform crud operations like Save the Blog, Read all the blogs, Read the blog with ID, Delete the blog with ID, And update the blog with firebase. Also, fetch the response from id and other relevant parameters.",
      image: "images/4.jpg",
    },
    {
      name: "E Commerce Web App",
      languages: "Node.js, HTML, CSS, BootStrap, MongoDB",
      description:
        "It is basic E Commerce Web App design which uploads all the pictures and the description of the products, and displays it in the frontend. The database used here is MongoDB, because of the NoSQL efficiency.",
      image: "images/5.jpg",
    },
    {
      name: "Weather App",
      languages: "Node.js, HTML, CSS, BootStrap, MongoDB, Bootstrap",
      description:
        "It is a weather app that shows the live weather of a city, whether it be temperature, humidity, pressure and other relevant parameters.",
      image: "images/6.jpg",
    },
    {
      name: "NEWS App",
      languages: "Node.js, HTML, CSS, BootStrap, MongoDB",
      description:
        "News App is designed in a mobile format view, which shows all the categorical news from the different categories provided in the app. Sports, Entertainment, Music, Food, Health are the categories that are already defined. But, if one wants to search something else, that was also being introduced in the news app.",
      image: "images/7.jpg",
    },
    {
      name: "Portfolio",
      languages: "React.js, HTML, CSS, JS",
      description: "A self portfolio developed by me.",
      image: "images/8.png",
    },
  ];
  const [projects, setProjects] = useState(pro);

  return (
    <div className="projects" id="projects">
      <div className="container">
      <div className="animate-charcter">Projects</div>
        <div className="row">
          {projects.map((e, index) => (
            <div className="col col-md-3" key={index}>
              <div className="card">
                <div className="img-cover">
                  <img src={e.image} alt="img" />
                  <div className="icon">
                    <svg
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        style={{
                          d: "M0 9H22M12 1.5L20.9333 8.2C21.4667 8.6 21.4667 9.4 20.9333 9.8L12 16.5",
                          stroke: "black",
                          strokeWidth: "3",
                        }}
                      />
                    </svg>
                  </div>
                </div>

                <div className="desc">
                  <h1  data-toggle="tooltip" data-placement="top" title={e.name}>{e.name}</h1>
                  <div className="text-desc">{e.description}</div>
                  <a className="" href="">
                    Take me
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 23 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        style={{
                          d: "M0 9H22M12 1.5L20.9333 8.2C21.4667 8.6 21.4667 9.4 20.9333 9.8L12 16.5",
                          stroke: "white",
                          strokeWidth: "3",
                        }}
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
