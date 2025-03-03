import React from "react";
import About from "./About";
import Projects from "./Projects";

import "../index.css";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-black footerdiv mx-auto mt-5 rounded-4 p-2">
        <a
          href="/about"
          className="me-2"
          style={{ textDecoration: "none", color: "white" }}
        >
          About
        </a>

        <a
          href="/projects"
          className="me-2"
          style={{ textDecoration: "none", color: "white" }}
        >
          Projects
        </a>

        <div className="d-flex gap-3 justify-content-center mt-4 mb-4">
          <a
            href="https://t.me/Zionn16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-telegram fa-2x fs-5 text-white"></i>
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x fs-5 text-white"></i>
          </a>
          <a
            href="https://web.facebook.com/people/Rahwa-Gebreslassie/pfbid029PWAf6x9YLuBgGPnmANRY6EbU9ZhRtrcEojS1j2n3GJRh9MnmGgtiZ6mwZY3onffl/?mibextid=ZbWKw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x fs-5 text-white"></i>
          </a>
          <a
            href="https://www.tiktok.com/@your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok fa-2x fs-5 text-white"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rahwa-gebresilassie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x fs-5 text-white"></i>
          </a>
          <a
            href="https://github.com/rahwa45"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x fs-5 text-white"></i>
          </a>
        </div>
        <p className="text-secondary">
          &copy; {new Date().getFullYear()} by Rahwa. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
