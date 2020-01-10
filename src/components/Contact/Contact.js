import React from "react";
import xing from "../../assets/social-media/xing.svg";
import linkedin from "../../assets/social-media/linkedin.svg";
import github from "../../assets/social-media/github.svg";
import "./Contact.css";
function Contact() {
  return (
    <div style={{ marginTop: "4rem" }} className="d-flex h-100 contactAll">
      <div className="left">
        <span>CONTACT</span>{" "}
      </div>
      <div className="middle">
        <div></div>
        <div className="social-media">
          <div>
            <img src={github} alt="github" />
          </div>
          <div>
            <img src={xing} alt="xing" />
          </div>
          <div>
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="right">
        <h1>CONTACT</h1>
        <form className="form">
          <div class="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name..."
            />
          </div>
          <div class="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email..."
            />
          </div>
          <div class="form-group">
            <label htmlFor="message">Your Message</label>
            <input
              type="text"
              class="form-control"
              id="message"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
        <div className="social-media-down">
            <img src={github} alt="github" />
            <img src={xing} alt="xing" />
            <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
