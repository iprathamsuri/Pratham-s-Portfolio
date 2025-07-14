import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <hr />
      <p>Pratham Suri © 2025 | Web Designer & Front-End Developer</p>
      <div className="footer-links">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <span>|</span>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <span>|</span>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <span>|</span>
        <a href="mailto:youremail@example.com">Email</a>
      </div>
      <p className="footer-made">Made with <span className="heart">❤️</span> using React &<br/>Designed With Figma</p>
      
    </footer>
  );
}
