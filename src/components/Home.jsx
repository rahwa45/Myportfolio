import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Projects.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

import { useState, useEffect } from "react";
import "../index.css";

const Home = () => {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply dark mode on load
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div>
      <div className="text-end">
        <button
          className="darkbutton"
          style={{}}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀" : "🌙"}
        </button>
      </div>

      <div className="d-flex justify-content-center home mx-auto">
        <div className=" homediv">
          <h1 className="text-start">Hello, I'm Rahwa Gebreyesus</h1>
          <h2 className=" text-start">Fullstack Developer</h2>
          <p className="text-start">
            Hi, I'm Rahwa Gebreyesus, a passionate Full Stack Developer with a
            knack for creating dynamic and scalable web application
          </p>

          <div className="d-flex containskills mb-3">
            <a href="./resume2.pdf" className="btn btn-dark me-2">
              <i className="fas fa-download"></i> Download CV
            </a>
            <a
              href="mailto:rahwa3113@gmail.com"
              className="btn btn-outline-dark contact"
            >
              <i className="fas fa-envelope"></i> Contact Me
            </a>
          </div>

          <div className="d-flex gap-3 sociallinks">
            <a
              href="https://t.me/Zionn16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram fa-2x fs-5"></i>
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x fs-5 "></i>
            </a>
            <a
              href="https://web.facebook.com/people/Rahwa-Gebreslassie/pfbid029PWAf6x9YLuBgGPnmANRY6EbU9ZhRtrcEojS1j2n3GJRh9MnmGgtiZ6mwZY3onffl/?mibextid=ZbWKw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x fs-5 "></i>
            </a>
            <a
              href="https://www.tiktok.com/@your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok fa-2x fs-5 "></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rahwa-gebresilassie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x fs-5 "></i>
            </a>
            <a
              href="https://github.com/rahwa45"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x fs-5 "></i>
            </a>
          </div>
        </div>
        <img
          src="./image12.png"
          alt="Girl"
          className=" me-5 rounded-3 imghome"
        />
      </div>
      <About />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
