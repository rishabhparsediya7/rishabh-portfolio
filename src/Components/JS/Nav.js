import React, { useState } from "react";
import "../CSS/Nav.css";
import "../CSS/heading.css";
const Nav = () => {
  return (
    <div className="navResponsive">
      <nav role="navigation" style={{ position: "fixed" }}>
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#experience">
              <li>Experience</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#education">
              <li>Academic</li>
            </a>
            <a href="#certification">
              <li>Certificates</li>
            </a>

            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="hr"></div>
      </nav>
    </div>
  );
};

export default Nav;
