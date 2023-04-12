import "./App.css";
import { projectData } from "./projectData";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./layout/Hero";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";

function App() {
  const [showMore, setShowMore] = useState(false);
  let renderedProjects = showMore ? projectData : projectData.slice(0, 3);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects
        showMore={showMore}
        setShowMore={setShowMore}
        renderedProjects={renderedProjects}
      />
      <Contact />
    </div>
  );
}

export default App;
