import React, { useState } from "react";
import { FaGithub, FaMoon, FaRegFileAlt, FaSun } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ onToggleTheme, theme }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <a href="https://github.com/iprathamsuri" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" title="GitHub" />
          </a>
        <a href="/assets/Pratham Resume.pdf" target="_blank" rel="noopener noreferrer">
          <FaRegFileAlt className="icon" title="Resume" />
        </a>
        </div>

        <ul className="nav-center">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="/assets/Pratham Resume.pdf">Resume</a></li>
          <div className="divider" />
          <li><button onClick={() => setShowPopup(true)}>Contact</button></li>
        </ul>

        <div className="nav-right">
          {theme === "dark" ? (
            <FaSun className="sun-icon" title="Switch to Light Mode" onClick={onToggleTheme} />
          ) : (
            <FaMoon className="sun-icon" title="Switch to Dark Mode" onClick={onToggleTheme} />
          )}
        </div>
      </nav>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Contact Me</h3>
            <p><strong>Name:</strong> Pratham Suri</p>
            <p><strong>Email:</strong> iprathamsuri.com</p>
            <p><strong>Phone:</strong> +91 7696961024</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pratham-suri-122bb9297/" target="_blank" rel="noopener noreferrer">View Profile</a></p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
