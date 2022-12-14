import React from "react";
import "../CSS/Footer.css";
import "../CSS/heading.css";
const Footer = () => {
  return (
    <div className="footers">
      <footer className="footer">
        <div className="container">
          <section className="mt-4 section-social">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/rishabh.parsediya.5/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/RishabhParsedi1"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="mailto:parsediyarishabh@gmail.com"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <i className="fab fa-google" aria-hidden="true"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/rishabh_parsediya/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/rishabh-parsediya/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/rishabhparsediya7"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
         
        </div>
         <section>
            <div className="copyright mt-4">Made with love ❤</div>
          </section>
      </footer>
    </div>
  );
};

export default Footer;
