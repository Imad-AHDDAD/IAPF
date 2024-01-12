import {
  faBars,
  faBrain,
  faBusinessTime,
  faContactCard,
  faFile,
  faGraduationCap,
  faHome,
  faListCheck,
  faRectangleAd,
  faShapes,
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
              <Link to="/imad-as-developer-cv">
                <li>Curriculum Vitae</li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/imad-as-designer/logos">
                <li>Logos</li>
              </Link>
              <Link to="">
                <li>Business Cards</li>
              </Link>
              <Link to="">
                <li>Banderoles</li>
              </Link>
              <Link to="/imad-as-designer/posters">
                <li>Posters</li>
              </Link>
              <Link to="/imad-as-designer">
                <li>Imad As Designer</li>
              </Link>
            </>
          )}
        </ul>
      </div>
      {props.profile === "none" ? (
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
        <ul className="icons-menu">
          <Link>
            <li>
              <FontAwesomeIcon
                icon={faContactCard}
                className={
                  activeIcon === "bc"
                    ? "menu-phone-icon active-btn"
                    : "menu-phone-icon"
                }
              />
            </li>
          </Link>
          <Link to="/imad-as-designer/logos">
            <li>
              <FontAwesomeIcon
                icon={faShapes}
                className={
                  activeIcon === "logo"
                    ? "menu-phone-icon active-btn"
                    : "menu-phone-icon"
                }
              />
            </li>
          </Link>
          <Link to="/imad-as-designer/posters">
            <li>
              <FontAwesomeIcon
                icon={faFile}
                className={
                  activeIcon === "poster"
                    ? "menu-phone-icon active-btn"
                    : "menu-phone-icon"
                }
              />
            </li>
          </Link>
          <Link>
            <li>
              <FontAwesomeIcon
                icon={faRectangleAd}
                className={
                  activeIcon === "banderole"
                    ? "menu-phone-icon active-btn"
                    : "menu-phone-icon"
                }
              />
            </li>
          </Link>
          <Link to="/imad-as-designer">
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
      )}
      <button onClick={switchIcon} className="bars-btn">
        <FontAwesomeIcon icon={icon} className="menu-bars" />
      </button>
    </div>
  );
}

export default Navbar;
