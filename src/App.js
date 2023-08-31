import "./App.css";
import Education from "./Sections/Education/Education";
import Header from "./Sections/Header/Header/Header";
import Myself from "./Sections/Myself/Myself";
import Skills from "./Sections/Skills/Skills";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Myself></Myself>
      <Skills></Skills>
      <Education></Education>
    </div>
  );
}

export default App;
