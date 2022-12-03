import React from "react";
import "./ProfileContent.css";
const ProfileContent = () => {
  return (
    <div className="container profile">
      <div className="row">
        <div className="col heading">
          <h1>
            <span>Rishabh</span> Parsediya
          </h1>
          <h3>
            Software<span> Engineer</span>
          </h3>
          <section className="mt-4 section-social">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/rishabh.parsediya.5/"
              target="_blank" rel="noreferrer"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/RishabhParsedi1"
              target="_blank" rel="noreferrer"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="mailto:parsediyarishabh@gmail.com"
              target="_blank" rel="noreferrer"
              role="button"
            >
              <i className="fab fa-google" aria-hidden="true"></i>

            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/rishabh_parsediya/"
              target="_blank" rel="noreferrer"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/rishabh-parsediya/"
              target="_blank" rel="noreferrer"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/rishabhparsediya7"
              target="_blank" rel="noreferrer"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          <a className="btn mt-5 resume" href="https://drive.google.com/file/d/1W7jzLG2MuNDw06800v-qGLQqXKjSy7B2/view?usp=share_link" download target="_blank" rel="noreferrer">Download Resume <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
        </div>
        <div className="col image mt-4">
          <img src="pf1.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
