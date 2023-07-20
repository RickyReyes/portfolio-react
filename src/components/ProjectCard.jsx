import React from "react";

const ProjectCard = ({ ...project }) => {
  return (
    <li className={`project ${project.photoQuery}`}>
      <div className="project__info">
        <h3 className="project__name">{project.name}</h3>
        <ul className="project__tech-stack">
          {project.techStack.map((techName, idx) => (
            <li className="project__tech" key={idx}>
              {techName}
            </li>
          ))}
        </ul>
        <p className="project__desc">{project.description}</p>
        <div className="project__links">
          <a className="project__link" href={project.github}>
            Source Code
          </a>
          <a className="project__link" href={project.liveSite}>
            Live Site
          </a>
        </div>
      </div>

      <div className={`${project.photoQuery} project__img`}></div>
    </li>
  );
};

export default ProjectCard;
