import React from "react";
import "./Experience.css";

import exp1 from "../assets/images/exp1.png"; // Laptop image
import exp2 from "../assets/images/exp2.png"; // Figma design

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">EXPERIENCE</h2>

      <div className="experience-item">
        <img src={exp1} alt="Experience 1" className="experience-image" />
        <div className="experience-details">
          <h3>Front-End Developer</h3>
          <p><strong>BITBYBIT IIT, ROORKEE – 21 MARCH, 2025</strong></p>
          <ul>
            <li>Developed responsive UI for dashboard and landing pages using React.js</li>
            <li>Improved website performance by 30% through optimized component rendering</li>
            <li>Collaborated with backend team to integrate REST APIs</li>
            <li>Participated in daily stand-ups and Agile sprints</li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <img src={exp2} alt="Experience 2" className="experience-image" />
        <div className="experience-details">
          <h3>Freelance UI/UX Designer</h3>
          <p><strong>Personal Client Project – JUNE, 2025</strong></p>
          <ul>
            <li>Designed Figma prototypes for a startup’s e-learning platform</li>
            <li>Conducted user research and created wireframes and high-fidelity designs</li>
            <li>Handoff to developers with proper design system and assets</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
