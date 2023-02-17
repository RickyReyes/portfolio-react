import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";

function App() {
  const projectsData = [
    {
      id: 1,
      name: "Create Cocktail App",
      photoQuery: "cocktails",
      techStack: ["React", "Tailwind CSS"],
      description:
        "My baby! Browse through cocktails, or select your available ingredients and see what cocktails you can make. Includes a simple algorithm for sorting cocktails based on selected ingredients, and memoization, routing, filters.",
      github: "https://github.com/RickyReyes/cocktails",
      liveSite: "https://cocktails-nu-nine.vercel.app/",
    },
    {
      id: 2,
      name: "Audiophile",
      photoQuery: "audiophile",
      techStack: ["React", "React Router", "Sass"],
      description:
        "A fully responsive, multi-page website for a mock e-commerce electronics company, with input validation, a cart modal, and routing.",
      github: "https://github.com/RickyReyes/audiophile",
      liveSite: "https://audiophile-pink.vercel.app/",
    },
    {
      id: 3,
      name: "Flag Game",
      photoQuery: "flag-game",
      techStack: ["React", "Tailwind CSS", "External API"],
      description:
        "My first creative project! A short quiz that tests your international flag knowledge. Pulls data from the REST Countries API. Can you score 10/10?",
      github: "https://github.com/RickyReyes/flag-game-react",
      liveSite: "https://flag-game-react-nine.vercel.app",
    },

    {
      id: 4,
      name: "To-do List",
      photoQuery: "todo-list",
      techStack: ["React", "React Hooks"],
      description:
        "A to-do list app with drag and drop functionality, light and dark mode, and local storage utilization.",
      github: "https://github.com/RickyReyes/todo-app",
      liveSite: "https://todo-app-pink-sigma.vercel.app/",
    },
    {
      id: 5,
      name: "DevJobs",
      photoQuery: "devjobs",
      techStack: ["TypeScript", "React", "React Router"],
      description:
        "A mock website for a tech job postings site. Includes a modal for small screen sizes, filter functionality and routing for each job's detail page.",
      github: "https://github.com/RickyReyes/devjobs",
      liveSite: "https://devjobs-seven.vercel.app/",
    },

    {
      id: 6,
      name: "Comments",
      photoQuery: "comments",
      techStack: ["TypeScript", "React", "OOP"],
      description: "An interactive comments section.",
      github: "https://github.com/RickyReyes/comments-ts",
      liveSite: "https://comments-ts.vercel.app/",
    },
  ];

  const [showMore, setShowMore] = useState(false);
  let renderedProjects = showMore ? projectsData : projectsData.slice(0, 3);

  return (
    <div className="App">
      <Hero />
      <section className="projects">
        <h2 className="projects__heading">Projects</h2>
        <ul className="projects__ul">
          {renderedProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
          {!showMore && (
            <p
              className="projects__show-more"
              onClick={() => setShowMore(true)}
            >
              Show More
            </p>
          )}
        </ul>
      </section>
      <Contact />
    </div>
  );
}

export default App;
