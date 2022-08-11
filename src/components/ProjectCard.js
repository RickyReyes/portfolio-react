import React from "react";

const ProjectCard = ({ ...project }) => {
	return (
		<li className={`project-card ${project.photoQuery}`}>
			<div className={`${project.photoQuery} project-img`}></div>
			<div className="project-info">
				<h3 className="project-name">{project.name}</h3>
				<ul className="project-tech-stack">
					{project.techStack.map((techName, idx) => (
						<li className="project-tech" key={idx}>
							{techName}
						</li>
					))}
				</ul>
				<p className="project-desc">{project.description}</p>
			</div>
			<div className="project-links">
				<a className="project-link" href={project.github}>
					Source Code
				</a>
				<a className="project-link" href={project.liveSite}>
					Live Site
				</a>
			</div>
		</li>
	);
};

export default ProjectCard;
