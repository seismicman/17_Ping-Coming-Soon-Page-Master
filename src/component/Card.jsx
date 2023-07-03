import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import dashboard from "../assets/images/illustration-dashboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Card = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const re =
      /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    re.exec(email)
      ? setError("")
      : setError("Please provide a valid email address");
  };

  return (
    <section className="master">
      <article className="summary">
        <div className="logo">
          <img src={logo} alt="logo.svg" />
        </div>
        <p className="subtitle">
          We are launching <span>soon!</span>
        </p>
        <p className="subscription">Subscribe and get notified</p>
        <div className="email-form">
          <input
            className={`email ${error ? "email-selected" : ""}`}
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="errors-container-mobile">
            <p className="text-error">{error}</p>
          </div>
          <button className="btn" onClick={handleSubmit}>
            Notify Me
          </button>
        </div>
        <div className="errors-container-desktop">
          <p className="text-error">{error}</p>
        </div>
      </article>
      <article className="chart">
        <img src={dashboard} alt="illustration-dashboard.png" />
      </article>
      <article className="social-icons">
        <FontAwesomeIcon className="facebook" icon={faFacebookF} />
        <FontAwesomeIcon className="twitter" icon={faTwitter} />
        <FontAwesomeIcon className="instagram" icon={faInstagram} />
      </article>
    </section>
  );
};

export default Card;
