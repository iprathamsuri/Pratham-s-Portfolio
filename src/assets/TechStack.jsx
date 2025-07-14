import React from "react";
import "./TechStack.css";
import { Tooltip } from "react-tooltip";

// Images
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import react from "../assets/images/react.png";
import node from "../assets/images/nodejs.png";
import mysql from "../assets/images/mysql.png";
import mongodb from "../assets/images/mongodb.png";
import python from "../assets/images/python.png";
import cpp from "../assets/images/cpp.png";
import java from "../assets/images/java.png";

export default function TechStack() {
  return (
    <section className="tech-stack-section" id="tech-stack">
      <h2 className="tech-title">MY TECH STACK</h2>

      <div className="tech-grid">
        {/* Line 1 */}
        <div className="tech-row">
          <div className="tech-icon" data-tooltip-id="tooltip" data-tooltip-content="HTML">
            <img src={html} alt="HTML" />
          </div>
          <div className="tech-icon" data-tooltip-id="tooltip" data-tooltip-content="CSS">
            <img src={css} alt="CSS" />
          </div>
          <div className="tech-icon" data-tooltip-id="tooltip" data-tooltip-content="React">
            <img src={react} alt="React" />
          </div>
        </div>

        {/* Line 2 */}
        <div className="tech-row">
          <div className="tech-icon" data-tooltip-id="tooltip" data-tooltip-content="MySQL">
            <img src={mysql} alt="MySQL" />
          </div>
          <div className="tech-icon" data-tooltip-id="tooltip" data-tooltip-content="Node.js">
            <img src={node} alt="Node.js" />
          </div>
          <div className="tech-icon" data-tooltip-id="tooltip" data-tooltip-content="MongoDB">
            <img src={mongodb} alt="MongoDB" />
          </div>
        </div>

        {/* Line 3 */}
        <div className="tech-row">
          <div className="tech-icon" data-tooltip-id="tooltip" data-tooltip-content="C++">
            <img src={cpp} alt="C++" />
          </div>
          <div className="tech-icon" data-tooltip-id="tooltip" data-tooltip-content="Java">
            <img src={java} alt="Java" />
          </div>
          <div className="tech-icon" data-tooltip-id="tooltip" data-tooltip-content="Python">
            <img src={python} alt="Python" />
          </div>
        </div>
      </div>

      <Tooltip id="tooltip" />
    </section>
  );
}
