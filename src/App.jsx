import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="app-scroll">
      <About />
      <Skills />
      <Portfolio />
      <Info />
      <Contact />
    </div>
  );
}

export default App;
