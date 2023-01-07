import React from "react";
import ProjectCard from "./ProjectCard";
import { BrowserRouter as Router } from "react-router-dom";

const Projects = ({ renderedProjects }) => {
  return (
    <section className="projects-section">
      <h2 className="projects-section__title">Projects</h2>
      <Router>
        <ul className="project-list">
          {renderedProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ul>
      </Router>
    </section>
  );
};

export default Projects;
