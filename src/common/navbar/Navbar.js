import {
  faBars,
  faBrain,
  faBusinessTime,
  faGraduationCap,
  faHome,
  faListCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [icon, setIcon] = useState(faBars);
  const activeIcon = props.active;

  function switchIcon() {
    if (icon === faBars) {
      setIcon(faXmark);
      document.getElementById("menu").style.left = "0";
    } else {
      setIcon(faBars);
      document.getElementById("menu").style.left = "-100%";
    }
  }

  return (
    <div className={props.navStyle + " navbar"}>
      <div className="menu" id="menu">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about-imad-ahddad">
            <li>About</li>
          </Link>
          <Link to="/contact-imad-ahddad">
            <li>Contact</li>
          </Link>
          {props.profile === "none" ? (
            <></>
          ) : props.profile === "developer" ? (
            <>
              <Link to="/imad-as-developer/education">
                <li>Education</li>
              </Link>
              <Link to="/imad-as-developer/experiences">
                <li>Professional Experience</li>
              </Link>
              <Link to="/imad-as-developer/skills">
                <li>Skills</li>
              </Link>
              <Link to="/imad-as-developer/projects">
                <li>Projects</li>
              </Link>
              <Link to="/imad-as-developer">
                <li>Imad As Developer</li>
              </Link>
              <Link
                to="/imad-as-developer-cv"
              >
                <li>Curriculum Vitae</li>
              </Link>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      {props.profile === "" ? (
        <></>
      ) : props.profile === "developer" ? (
        <ul className="icons-menu">
          <Link to="/imad-as-developer/education">
            <li>
              <FontAwesomeIcon
                icon={faGraduationCap}
                className={
                  activeIcon === "education"
                    ? "menu-phone-icon active-btn"
                    : "menu-phone-icon"
                }
              />
            </li>
          </Link>
          <Link to="/imad-as-developer/experiences">
            <li>
              <FontAwesomeIcon
                icon={faBusinessTime}
                className={
                  activeIcon === "experiences"
                    ? "menu-phone-icon active-btn"
                    : "menu-phone-icon"
                }
              />
            </li>
          </Link>
          <Link to="/imad-as-developer/projects">
            <li>
              <FontAwesomeIcon
                icon={faListCheck}
                className={
                  activeIcon === "projects"
                    ? "menu-phone-icon active-btn"
                    : "menu-phone-icon"
                }
              />
            </li>
          </Link>
          <Link to="/imad-as-developer/skills">
            <li>
              <FontAwesomeIcon
                icon={faBrain}
                className={
                  activeIcon === "skills"
                    ? "menu-phone-icon active-btn"
                    : "menu-phone-icon"
                }
              />
            </li>
          </Link>
          <Link to="/imad-as-developer">
            <li>
              <FontAwesomeIcon
                icon={faHome}
                className={
                  activeIcon === "home"
                    ? "menu-phone-icon active-btn"
                    : "menu-phone-icon"
                }
              />
            </li>
          </Link>
        </ul>
      ) : (
        <></>
      )}
      <button onClick={switchIcon} className="bars-btn">
        <FontAwesomeIcon icon={icon} className="menu-bars" />
      </button>
    </div>
  );
}

export default Navbar;
