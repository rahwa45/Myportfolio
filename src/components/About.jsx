import React from "react";
import "../index.css";

const About = () => {
  return (
    <div>
      <div className="w-25 mt-5 mx-5 dotline">
        <h5 className="">About Me</h5>
        <div className="dotted-line mb-0"></div>
      </div>

      <div className="d-flex justify-content-between mx-auto rounded-3 containabout">
        <div className="p-3  m-3 rounded-3 about">
          <h3 className="text-center">
            {" "}
            <i className="fas fa-user me-2"></i>
            <br /> Introduction
          </h3>
          <p>
            I am a Full-Stack Developer with a strong foundation in web
            development and system design.
          </p>
        </div>

        <div className="p-3 m-3 rounded-3 about">
          <h3>
            {" "}
            <i className="fas fa-briefcase me-2"></i>
            <br /> Internships
          </h3>
          <p>
            During my internship with Na’amal and Dot Ethiopia, I worked on
            real-world projects that enhanced my skills
          </p>
        </div>

        <div className="p-3 m-3 rounded-3 about">
          <h3>
            {" "}
            <i className="fas fa-bullseye me-2"></i>
            <br /> Career Goals{" "}
          </h3>
          <p>
            I am eager to apply my knowledge to impactful projects and
            continuously grow in the tech industry.
          </p>
        </div>
      </div>
      <div className="w-25 mt-5 mx-5">
        <h5>Skills</h5>
        <div className="dotted-line mb-0"></div>
      </div>

      <div className="d-flex containskills mx-auto">
        <span className="badge bg-dark me-2">JavaScript</span>
        <span className="badge bg-secondary me-2">React.js</span>
        <span className="badge bg-dark me-2">Node.js</span>
        <span className="badge bg-secondary me-2">MongoDB</span>
        <span className="badge bg-dark me-2">Bootstrap</span>
      </div>
    </div>
  );
};

export default About;
