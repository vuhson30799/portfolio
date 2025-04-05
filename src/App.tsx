// import components
import Hero, {HeroLink} from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills, {SkillsLink} from "./components/Skills";
import Experiences, {ExperiencesLink} from "./components/Experience.tsx";
import Projects, {ProjectsLink} from "./components/Projects";
import Contact, {ContactLink} from "./components/Contact";
import {useCallback, useEffect, useState} from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import {NavbarContext, VisibleNavbarPayload} from "./context/navbar-context.ts";

const App = () => {
  const [nav, setNav] = useState<VisibleNavbarPayload>({
    [HeroLink]: false,
    [SkillsLink]: false,
    [ExperiencesLink]: false,
    [ProjectsLink]: false,
    [ContactLink]: false,
  })
  const updateNav = useCallback((updatedNav: VisibleNavbarPayload) => {
    setNav(updatedNav)
  }, [])
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <NavbarContext.Provider value={{
      item: nav,
      setItem: updateNav
    }}>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experiences/>
      <Projects/>
      <Contact/>
    </NavbarContext.Provider>
  );
};

export default App;
