import React from "react";
import Navbar from "../../common/navbar/Navbar";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div className="education-container">
      <div className="overlay2">
        <Navbar active="skills" navStyle="noBackground" profile="developer" />
        <h1 className="title title-education">Skills</h1>
        <div className="education-cards">
          <SkillCard
            class="java"
            skillName="Java"
            stars={4}
            domain="Android - Web"
          />
          <SkillCard
            class="kotlin"
            skillName="Kotlin"
            stars={4}
            domain="Android"
          />
          <SkillCard
            class="react"
            skillName="ReactJs"
            stars={4}
            domain="Web - Front-end"
          />
          <SkillCard
            class="express"
            skillName="ExpressJs"
            stars={4}
            domain="Web - Back-end"
          />
          <SkillCard
            class="spring"
            skillName="Spring Boot"
            stars={3}
            domain="Web - Back-end"
          />
          <SkillCard
            class="php"
            skillName="Php"
            stars={3}
            domain="Web - Back-end"
          />
          <SkillCard
            class="mysql"
            skillName="MySql"
            stars={4}
            domain="Database"
          />
          <SkillCard
            class="mongo"
            skillName="MongoDB"
            stars={4}
            domain="Database"
          />
          <SkillCard
            class="js"
            skillName="JavaScript"
            stars={3}
            domain="Web"
          />
          <SkillCard
            class="css"
            skillName="Css"
            stars={5}
            domain="Web - Front-end"
          />
        </div>
      </div>
    </div>
  );
}
export default Skills;
