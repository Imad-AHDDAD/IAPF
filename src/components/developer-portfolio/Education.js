import React from "react";
import Navbar from "../../common/navbar/Navbar";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <div className="education-container">
      <div className="overlay2">
        <Navbar navStyle="noBackground" active="education" profile="developer" />
        <h1 className="title title-education">education</h1>

        <div className="education-cards">
          <EducationCard
            class="irisi"
            title="Software Engineering Student"
            desc="FST Marrakech - IRISI"
            date="2021 - 2024"
          />
          <EducationCard
            class="deust"
            title="DEUST"
            desc="FST Marrakech - MIPC"
            date="2020 - 2021"
          />
          <EducationCard
            class="bac"
            title="Baccalaureate"
            desc="Aljoulane High School - Physics"
            date="2017 - 2018"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
