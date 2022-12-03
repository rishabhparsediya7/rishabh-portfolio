import Nav from "./Components/Nav";
import "./App.css";
import ProfileContent from "./Components/ProfileContent";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Certification from "./Components/Certification";
import Skills from "./Components/Skills";
function App() {
  return (
    <div className="portfolio">
      <div className="App">
        <Nav />
        <ProfileContent />
      </div>
      <Experience/>
      <Projects/>
      <Skills/>
      <Education/>
      <Certification/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
