import Hero from "./components/Hero";
import "./App.css";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";

function App() {
  const projectsData = [
    {
      id: 1,
      name: "Create Cocktail App",
      photoQuery: "cocktails",
      techStack: ["React", "Tailwind CSS"],
      description:
        "An app about cocktails for those of legal drinking age. Browse through cocktails, or select your available ingredients and see what cocktails you can make.",
      github: "https://github.com/RickyReyes/cocktails",
      liveSite: "https://cocktails-nu-nine.vercel.app/",
    },
    {
      id: 2,
      name: "Flag Game",
      photoQuery: "flag-game",
      techStack: ["React", "Tailwind CSS", "External API"],
      description:
        "A short quiz for testing your international flag knowledge. Pulls data from the Rest Countries API.",
      github: "https://github.com/RickyReyes/flag-game-react",
      liveSite: "https://flag-game-react-nine.vercel.app",
    },
    {
      id: 3,
      name: "To-do List",
      photoQuery: "todo-list",
      techStack: ["React", "React Hooks"],
      description:
        "A to-do list app with drag and drop functionality, light and dark mode, and local storage utilization.",
      github: "https://github.com/RickyReyes/todo-app",
      liveSite: "https://todo-app-pink-sigma.vercel.app/",
    },
    // {
    // 	id: 4,
    // 	name: "Space Tourism Website",
    // 	photoQuery: "space",
    // 	techStack: ["React", "React Router DOM"],
    // 	description:
    // 		"A brochure website for a mock space tourism company. Routing implemented with React Router DOM.",
    // 	github: "https://github.com/RickyReyes/space-tourism-website",
    // 	liveSite: "https://space-tourism-website-ten-lime.vercel.app/",
    // },
    {
      id: 4,
      name: "DevJobs",
      photoQuery: "devjobs",
      techStack: ["TypeScript", "React", "React Router DOM"],
      description:
        "A mock website for a tech job postings site. Includes a modal for small screen sizes, filter functionality and routing for each job's detail page.",
      github: "https://github.com/RickyReyes/devjobs",
      liveSite: "https://devjobs-seven.vercel.app/",
    },
    {
      id: 5,
      name: "Comments",
      photoQuery: "comments",
      techStack: ["TypeScript", "React", "OOP"],
      description: "An interactive comments section.",
      github: "https://github.com/RickyReyes/comments-ts",
      liveSite: "https://comments-ts.vercel.app/",
    },
    {
      id: 6,
      name: "Bookmark Landing Page",
      photoQuery: "bookmark",
      techStack: ["Flexbox", "Vanilla JS"],
      description: "A responsive landing page for a mock company.",
      github: "https://github.com/RickyReyes/bookmark",
      liveSite: "https://bookmark-dun-pi.vercel.app/",
    },
  ];

  let showMoreProjects = false;

  let renderedProjects = showMoreProjects
    ? projectsData
    : projectsData.slice(0, 6);

  return (
    <div className="App">
      <Hero />
      <Projects renderedProjects={renderedProjects} />
      <ContactFooter />
    </div>
  );
}

export default App;
