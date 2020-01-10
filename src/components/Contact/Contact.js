import React from "react";
import { Link } from "react-router-dom";
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
            <a
              href="https://github.com/BrManga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
          <div>
            <a
              href="https://www.xing.com/profile/Manga_ZBora/cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xing} alt="xing" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/z-bora-m-700094175/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
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
          <a
            href="https://github.com/BrManga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.xing.com/profile/Manga_ZBora/cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={xing} alt="xing" />
          </a>
          <a
            href="https://www.linkedin.com/in/z-bora-m-700094175/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
