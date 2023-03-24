import ProjectCard from "../components/ProjectCard";

export default function Projects({ showMore, setShowMore, renderedProjects }) {
  return (
    <section className="projects">
      <h2 className="projects__heading">Projects</h2>
      <ul className="projects__ul">
        {renderedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
        {!showMore && (
          <p className="projects__show-more" onClick={() => setShowMore(true)}>
            Show More
          </p>
        )}
      </ul>
    </section>
  );
}
