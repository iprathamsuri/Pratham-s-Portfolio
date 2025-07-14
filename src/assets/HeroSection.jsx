import React from "react";
import "./HeroSection.css";
import profilePic from "../assets/images/profile.jpg";
import { FaChevronDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="top-row">
        <div className="hero-left">
          <h1>Pratham Suri</h1>
          <h2>UI/UX Designer & FrontEnd Developer</h2>
          <div className="buttons">
            <button className="hire">Hire me !</button>
            <button className="collab">• Available for Collaboration</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={profilePic} alt="Pratham Suri" className="profile-img" />
        </div>
      </div> 

      <p className="intro">
        I’m a passionate Figma designer and front-end developer who brings ideas to life through clean, user-focused interfaces. Skilled in creating responsive, modern UI designs and implementing them with HTML, CSS, JavaScript, and React. I blend creativity with code to craft seamless digital experiences.
      </p>

      <div className="scroll-icon">
        <FaChevronDown size={24} />
      </div>
    </section>
  );
}
