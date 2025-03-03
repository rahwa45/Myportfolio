import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <div className="">
      <div className="w-25 mt-5 mx-5">
        <h5>Contact Me</h5>
        <div className="dotted-line mb-0"></div>
      </div>
      <div className="d-flex flex-column contactdiv p-3 ">
        <div className="contactinput">
          <input
            type="text"
            id="name"
            className="form-control contactin"
            placeholder="Enter your name"
            required
          />{" "}
          <br />
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />{" "}
          <br />
          <textarea
            id="message"
            className="form-control"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>{" "}
          <br />
          <button type="submit" className="link3 w-100">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
