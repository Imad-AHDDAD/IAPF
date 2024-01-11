import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className={`project-image ${props.class}`} />
      <h1 className="project-title">{props.title}</h1>
      <h3 className="project-type">{props.type}</h3>
      <p className="project-desc">{props.desc}</p>
      {props.isInPlayStore ? (
        <>
          <Link to={props.link} target="_blank" className="install">
            Install It Now
          </Link>
        </>
      ) : (
        <>
          <Link to={props.link} target="_blank" className="see">
            Get It
          </Link>
        </>
      )}
    </div>
  );
}

export default ProjectCard;
