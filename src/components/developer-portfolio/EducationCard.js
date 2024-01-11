import React from "react";

function EducationCard(props) {
  return (
    <div className="education-card">
      <div className={`education-level-image ${props.class}`} />
      <div className="education-decription">
        <h1 className="formation-title">{props.title}</h1>
        <p className="formation-desc">{props.desc}</p>
        <p className="formation-date">{props.date}</p>
      </div>
    </div>
  );
}

export default EducationCard;
