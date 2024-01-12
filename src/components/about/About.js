import React from "react";
import Navbar from "../../common/navbar/Navbar";
import { Link } from "react-router-dom";
import githubLogo from "../../images/github.png";
import linkedinLogo from "../../images/linkedin.webp";
import instagramLogo from "../../images/instagramlogo.webp";

function About() {
    const githubLink = "https://github.com/Imad-AHDDAD/";
    const linkedinLink = "https://www.linkedin.com/in/imad-ahddad-a2b5b7236/";
    const instagramLink = "https://www.instagram.com/reedesignagency/";
  return (
    <>
      <Navbar navStyle="withBackground" profile="none" />
      <div className="hero">
        <div className="top">
          <div className="profile-image" />
        </div>
        <div className="bottom about">
          <h1 className="about-name">Imad AHDDAD</h1>
          <p className="about-desc">
            Software Engineering Student and Amateur Graphic Designer ,My work is Impressive, Effective and
            Affordable. You can have complete confidence and know that your
            project will be undertaken with the utmost care and skill.
          </p>
          <div className="socials">
            <Link className="social-link" target="_blank" to={githubLink}>
              <img src={githubLogo} alt="github" />
            </Link>
            <Link className="social-link" target="_blank" to={linkedinLink}>
              <img src={linkedinLogo} alt="linkedin" />
            </Link>
            <Link className="social-link" target="_blank" to={instagramLink}>
              <img src={instagramLogo} alt="linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
