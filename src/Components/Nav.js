import React, { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [nav, setNav] = useState(false);
  console.log(nav);

  return (
      <nav role="navigation" style={{position:"fixed"}}>
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
            <a href="#certification">
              <li>Certificates</li>
            </a>
            <a href="#education">
              <li>Academic</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="hr"></div>
      </nav>

  );
};

export default Nav;
