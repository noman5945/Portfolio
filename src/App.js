import "./App.css";
import Contact from "./Sections/Contact/Contact";
import Education from "./Sections/Education/Education";
import Footer from "./Sections/Footer/Footer";
import Header from "./Sections/Header/Header/Header";
import Myself from "./Sections/Myself/Myself";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Myself></Myself>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
