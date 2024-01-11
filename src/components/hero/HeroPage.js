import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../../common/navbar/Navbar";

function HeroPage() {
  const navigate = useNavigate();
  const notify = () => {
    toast.success("Coming Soon !");
  };
  function goTo(where) {
    navigate(where);
  }
  return (
    <>
      <Navbar navStyle="withBackground" profile = "none" />
      <div className="hero">
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontSize: "18px",
            },
          }}
          reverseOrder={false}
        />
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
            <button onClick={notify} className="as-btn as-designer">
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
