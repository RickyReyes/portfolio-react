import "./App.css";
import { projects } from "./projectData";
import Header from "./components/Header";
import Hero from "./layout/Hero";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
