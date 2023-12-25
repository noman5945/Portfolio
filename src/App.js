import "./App.css";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import Header from "./Sections/Header/Header/Header";
import Myself from "./Sections/Myself/Myself";
import Projects from "./Sections/Projects/Projects";
import ServicesMain from "./Sections/Services/ServicesMain";
import ShortDescription from "./Sections/ShortDescription/ShortDescription";
import Skills from "./Sections/Skills/Skills";

function App() {
  return (
    <div className="mx-auto">
      <Header></Header>
      <ShortDescription></ShortDescription>
      <Myself></Myself>
      <Skills></Skills>
      <Projects></Projects>
      <ServicesMain></ServicesMain>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
