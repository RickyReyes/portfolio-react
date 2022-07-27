import Header from "./components/Header";
import Hello from "./components/Hello";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import "./App.css";
import ContactFooter from "./components/ContactFooter";

function App() {
	const projectsData = [
		{
			id: 1,
			name: "Cocktails*",
			photoQuery: "cocktails",
			techStack: ["React", "Tailwind CSS"],
			description:
				"An app about cocktails for those of legal drinking age. Select your available ingredients and see what cocktails you can make.",
			github: "https://github.com/RickyReyes/cocktails",
			liveSite: "https://cocktails-nu-nine.vercel.app/",
		},
		{
			id: 2,
			name: "Flag Game*",
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
		{
			id: 4,
			name: "Space Tourism Website",
			photoQuery: "space",
			techStack: ["React", "React Hooks"],
			description:
				"Search through and filter countries. Pulls data from the Rest Countries API.",
			github: "https://github.com/RickyReyes/space-tourism-website",
			liveSite: "https://space-tourism-website-ten-lime.vercel.app/",
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
	return (
		<div className="App">
			<Header />
			<Hello />
			<section id="projects-section">
				<h2>Projects</h2>
				<small>* original concept and design</small>
				<div className="made-with">Made with:</div>
				<div className="tools">
					<div className="tools-left">
						<small className="tool html">HTML</small>
						<small className="tool css">CSS</small>
						<small className="tool css">Sass</small>
						<small className="tool css">Tailwind CSS</small>
					</div>
					<div className="tools-right">
						<small className="tool js">JavaScript (ES6)</small>
						<small className="tool ts">TypeScript</small>
						<small className="tool react">React</small>
						<small className="tool react">React Router DOM</small>
					</div>
				</div>
				<ul className="project-grid">
					{projectsData.map((project) => (
						<ProjectCard {...project} />
					))}
				</ul>
			</section>
			<About />
			<ContactFooter />
		</div>
	);
}

export default App;
