import ProjectCard from "../components/ProjectCard";

export default function Projects({ projects }) {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading">Projects</h2>
      <ul className="projects__ul">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </section>
  );
}
