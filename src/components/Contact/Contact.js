import React, { useState } from "react";
import xing from "../../assets/social-media/xing.svg";
import linkedin from "../../assets/social-media/linkedin.svg";
import github from "../../assets/social-media/github.svg";
import "./contact.styles.scss";
function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [emailStatus, setMailStatus] = useState(false);
  const submitHandler = e => {
    const { email, name, message } = state;
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the response state and the step
      console.log(xhr.responseText);

      setMailStatus(xhr.responseText);
    });
    // open the request with the verb and the url
    xhr.open(
      "GET",
      "https://www.boramanga.com/sendemail/index.php?sendto=" +
        email +
        "&name=" +
        name +
        "&message=" +
        message
    );
    // send the request
    xhr.send();

    // reset the fields
    setState({ name: "", email: "", message: "" });
    e.preventDefault();
  };
  const changeHandler = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
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
        <form className="form" onSubmit={submitHandler} id="contactForm">
          <div class="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name..."
              name="name"
              value={state.name}
              onChange={changeHandler}
            />
          </div>
          <div class="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email..."
              name="email"
              value={state.email}
              onChange={changeHandler}
            />
          </div>
          <div class="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              class="form-control"
              id="message"
              rows="3"
              placeholder="Your Message"
              name="message"
              value={state.message}
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-2">
            Submit
          </button>
          <div>
            {emailStatus && (
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  marginTop: "5px"
                }}
              >
                Thank you for contacting me.
              </div>
            )}
          </div>
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
