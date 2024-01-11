import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SkillCard(props) {
  const coloredStarsArray = Array.from(
    { length: props.stars },
    (_, index) => index + 1
  );
  const unColoredStarsArray = Array.from(
    { length: Number(5 - props.stars) },
    (_, index) => index + 1
  );
  return (
    <div className="skill-card">
      <div className={`skill-image ${props.class}`} />
      <div className="skill-desc">
        <h1>{props.skillName}</h1>
        <p>{props.domain}</p>
        <p className="level">
          {coloredStarsArray.map((star, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="star-icon colored" />
          ))}
          {unColoredStarsArray.map((star, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="star-icon uncolored" />
          ))}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
