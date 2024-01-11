import React from "react";
import Navbar from "../../common/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DeveloperHome() {
  return (
    <div className="home-developer">
      <div className="overlay">
        <Navbar navStyle="noBackground" active="home" profile="developer" />
        <div className="content">
          <div className="hello">
            <div className="gif-image" />
            <p className="developer-hero-sentence">
              Hello, I'm <span>AHDDAD Imad </span>.<br />
              I'm a Software Engineering Student
            </p>
            <Link to="/imad-as-developer-cv" className="play-btn">
              <FontAwesomeIcon icon={faDownLong} className="play-icon" />
            </Link>
            <p className="download-cv">
              Download CV
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperHome;
