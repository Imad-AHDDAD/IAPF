import React from "react";

function ExperienceCard(props) {
  return (
    <div className="experience-card">
      <div className="experience-top" />
      <div className={`experience-image ${props.class}`} />
      <div className="experience-bottom">
        <h1>{props.title}</h1>
        <p className="desc">{props.desc}</p>
        <p className="date">{props.date}</p>
        <p className="loc">{props.location}</p>
        <div className="skills-experience">
            Skills : {props.skills}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
