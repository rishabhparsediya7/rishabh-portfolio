import Nav from "./Components/JS/Nav";
import "./App.css";
import ProfileContent from "./Components/JS/ProfileContent";
import Experience from "./Components/JS/Experience";
import Projects from "./Components/JS/Projects";
import Education from "./Components/JS/Education";
import Contact from "./Components/JS/Contact";
import Footer from "./Components/JS/Footer";
import Certification from "./Components/JS/Certification";
import Skills from "./Components/JS/Skills";
import "./Components/CSS/Responsive/responsive.css";
import useLocalStorage from "use-local-storage";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Deck from "./Components/JS/Contact";
function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(defaultDark);
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    console.log("com");
    const newTheme = theme === "light" ? "dark" : "light";
    console.log(newTheme);
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <button className="theme-button" onClick={switchTheme}>
        {theme === "light" ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
      </button>
      <Nav />
      <ProfileContent theme={theme}/>
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certification />
      <Deck/>
      <Footer />
    </div>
  );
}

export default App;
