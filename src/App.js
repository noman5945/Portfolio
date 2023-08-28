import "./App.css";
import Header from "./Sections/Header/Header/Header";
import Myself from "./Sections/Myself/Myself";
import Skills from "./Sections/Skills/Skills";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Myself></Myself>
      <Skills></Skills>
    </div>
  );
}

export default App;
