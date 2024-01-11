import React from "react";
import Navbar from "../../common/navbar/Navbar";
import ExperienceCard from "./ExperienceCard";

function Experiences() {
  return (
    <div className="education-container">
      <div className="overlay2">
        <Navbar
          navStyle="noBackground"
          active="experiences"
          profile="developer"
        />
        <h1 className="title title-education">Experiences</h1>
        <div className="education-cards">
          <ExperienceCard
            class="adria"
            title="Android Developer"
            desc="Adria Business & Technology · Internship"
            date="Jul 2023 - Aug 2023 · 2 mos"
            location="Casablanca-Settat, Morocco · Remote"
            skills="Room Database · Kotlin · Firebase · Android Studio · Model-view-viewmodel (MVVM)"
          />

          <ExperienceCard
            class="uca"
            title="Full Stack Developer"
            desc="FSTG MarraKech - UCA · Internship"
            date="Aug 2022 · 1 mo"
            location="Marrakesh-Safi, Morocco · Remote"
            skills="Spring Boot · Angular · JavaScript · MySQL"
          />
        </div>
      </div>
    </div>
  );
}

export default Experiences;
