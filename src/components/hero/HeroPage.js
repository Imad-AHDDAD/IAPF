import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../common/navbar/Navbar";

function HeroPage() {
  const navigate = useNavigate();
  function goTo(where) {
    navigate(where);
  }
  return (
    <>
      <Navbar navStyle="withBackground" profile="none" />
      <div className="hero">
        <div className="top">
          <div className="profile-image" />
        </div>
        <div className="bottom">
          <p className="name">
            <span className="ahddad">AHDDAD </span>
            <span className="imad">IMAD</span>
          </p>
          <p className="bio">
            Software Engineering Student <br /> Amateur Graphic Designer
          </p>
          <div className="hero-buttons">
            <button
              onClick={(e) => {
                goTo("/imad-as-designer");
              }}
              className="as-btn as-designer"
            >
              <FontAwesomeIcon className="arrow-btn" icon={faAnglesLeft} />
              View As Designer
            </button>
            <button
              onClick={(e) => {
                goTo("/imad-as-developer");
              }}
              className="as-btn as-developer"
            >
              View As Developer
              <FontAwesomeIcon className="arrow-btn" icon={faAnglesRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
