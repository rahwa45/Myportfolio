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
            I am a passionate Full-Stack Developer with a strong foundation in
            web development and system design. Additionally, I have experience
            as a Project Manager, where I schedule and oversee my team's
            progress, ensuring deadlines are met, supporting team members, and
            organizing bi-weekly goal meetings with international mentors.
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
            real-world projects that enhanced my skills The company recognized
            my contributions and provided me with a recommendation.
            <br></br>
            <a
              href="https://drive.google.com/file/d/19g-WizEiNlFveSR-VLpCaqlw72KZ-eKW/view?usp=sharing"
              className=""
            >
              View Recommendation
            </a>
          </p>
        </div>

        <div className="p-3 m-3 rounded-3 about">
          <h3>
            {" "}
            <i className="fas fa-bullseye me-2"></i>
            <br /> Career Goals{" "}
          </h3>
          <p>
            I am eager to apply my knowledge to impactful projects, embrace new
            challenges, and continuously grow as a developer in the
            ever-evolving tech industry. My goal is to create innovative
            solutions that make a meaningful difference.
          </p>
        </div>
      </div>
      <div className="w-25 mt-5 mx-5">
        <h5>Skills</h5>
        <div className="dotted-line mb-0"></div>
      </div>

      <div className="d-flex mx-auto  extradiv justify-content-start rounded-4 p-5">
        <div className="text-start">
          <h6>
            <strong className="mx-2">Frontend:</strong>
          </h6>
          <ul>
            <li>
              {" "}
              <span className="badge bg-dark me-2">HTML5</span>
            </li>

            <li>
              <span className="badge bg-secondary me-2">React.js</span>
            </li>
            <li>
              <span className="badge bg-dark me-2">Bootstrap</span>
            </li>
            <li>
              {" "}
              <span className="badge bg-secondary me-2">Tailwind CSS</span>
            </li>
            <li>
              <span className="badge bg-dark me-2">JavaScript (ES6+)</span>
            </li>
          </ul>
        </div>

        <div className="text-start">
          <h6>
            <strong className="mx-2">Backend:</strong>
          </h6>
          <ul>
            <li>
              <span className="badge bg-dark me-2">Node.js</span>
            </li>
            <li>
              <span className="badge bg-secondary me-2">Express.js</span>
            </li>
            <li>
              <span className="badge bg-dark me-2">RESTful APIs</span>
            </li>
          </ul>
        </div>

        <div className="text-start">
          <h6>
            <strong className="mx-2">Database:</strong>
          </h6>
          <ul>
            <li>
              <span className="badge bg-dark me-2">SQL</span>
            </li>
            <li>
              <span className="badge bg-secondary me-2">MongoDB</span>
            </li>
          </ul>
        </div>

        <div className="text-start">
          <h6>
            <strong className="mx-2">Tools:</strong>
          </h6>
          <ul>
            <li>
              {" "}
              <span className="badge bg-dark me-2">Git</span>
            </li>
            <li>
              {" "}
              <span className="badge bg-secondary me-2">GitHub</span>
            </li>

            <li>
              {" "}
              <span className="badge bg-secondary me-2">Postman</span>
            </li>
            <li>
              <span className="badge bg-dark me-2">Visual Studio Code</span>
            </li>
          </ul>
        </div>

        <div className="text-start">
          <h6>
            <strong className="mx-2">Deployment:</strong>
          </h6>
          <ul>
            <li>
              <span className="badge bg-secondary me-2 ">Vercel</span>
            </li>
            <li>
              <span className="badge bg-dark me-2">Render</span>
            </li>
            <li>
              <span className="badge bg-dark me-2">Netlify</span>
            </li>
          </ul>
        </div>

        <div className="text-start">
          <h6>
            <strong className="mx-2">Additional Skills:</strong>
          </h6>
          <ul>
            <li>
              <span className="badge bg-dark mx-2">Zoom</span>
            </li>

            <li>
              <span className="badge bg-dark mx-2">Figma</span>
            </li>
            <li>
              <span className="badge bg-dark mx-2">Trello</span>
            </li>
            <li>
              <span className="badge bg-dark mx-2">Canva</span>
            </li>
            <li>
              <span className="badge bg-dark mx-2">Google Meet</span>
            </li>
            <li>
              <span className="badge bg-dark mx-2">Problem Solving</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
