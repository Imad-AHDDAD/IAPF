import React from "react";
import Navbar from "../../common/navbar/Navbar";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="education-container">
      <div className="overlay2">
        <Navbar navStyle="noBackground" active="projects" profile="developer" />
        <h1 className="title title-education">Projects</h1>
        <div className="education-cards">
          <ProjectCard
            class="shufflit"
            title="Shufflit"
            type="Android Application"
            desc="All-in-one utility app, designed to enhance organization and
          decision-making. With four powerful tools, Shufflit simplifies various
          tasks"
            isInPlayStore={true}
            link="https://play.google.com/store/apps/details?id=com.a7dev.shufflit"
          />

          <ProjectCard
            class="aratt"
            title="Aratt"
            type="Android Application"
            desc="an Android app designed for note-taking and management. This app allows users to create, edit, and delete notes"
            isInPlayStore={true}
            link="https://play.google.com/store/apps/details?id=com.a7dev.noteapp"
          />

          <ProjectCard
            class="crypto"
            title="Crypto ?"
            type="Android Application"
            desc="an Android app that provides information about various cryptocurrencies, including their current prices, low prices, high prices,change percentage , and a small description"
            isInPlayStore={false}
            link="https://shorturl.at/goxPQ"
          />

          <ProjectCard
            class="wweather"
            title="WWeather"
            type="Android Application"
            desc="an Android weather application that allows you to stay up to date with the latest weather conditions"
            isInPlayStore={false}
            link="https://rb.gy/nw22v"
          />

          <ProjectCard
            class="ahdown"
            title="AHDown"
            type="Android Application"
            desc="a mini Android application that allows you to download youtube videos in many formats"
            isInPlayStore={false}
            link="https://rb.gy/uo5t"
          />

          <ProjectCard
            class="jfe"
            title="Journées FSTG-Entreprises"
            type="Web Application"
            desc="a website for the “FSTG business days” event"
            isInPlayStore={false}
            link="https://github.com/Imad-AHDDAD/Journ-es-FST-Entreprises"
          />
          
          <ProjectCard
            class="irisi"
            title="IRISI Plateform"
            type="Web Application"
            desc="It allows students of the IRISI sector to download the courses shared by the teachers"
            isInPlayStore={false}
            link="https://www.irisiplateforme.tk/"
          />
          
          <ProjectCard
            class="portfolio"
            title="My Portfolio"
            type="Web Application"
            desc="An online representation of work I have created, my skills and experiences"
            isInPlayStore={false}
            link="https://imad-ahddad.github.io/"
          />
          
          <ProjectCard
            class="todolist"
            title="ToDo List"
            type="Web Application"
            desc="An online Todo List using React JS"
            isInPlayStore={false}
            link="https://imad-ahddad.github.io/Todo-List-React-Js/"
          />

        </div>
      </div>
    </div>
  );
}

export default Projects;
