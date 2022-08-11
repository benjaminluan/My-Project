import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div id="landing">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list__item">
            <a href="" className="navigation__list__link">
              Projects
            </a>
          </li>
          <li className="navigation__list__item">
            <a href="" className="navigation__list__link">
              Resume
            </a>
          </li>
          <li className="navigation__list__item">
            <a href="" className="navigation__list__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <h1 className="landing__header">Ready to meet your next UI Developer?</h1>

      <div className="arrow--container">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Landing;
