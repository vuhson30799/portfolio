import {useContext, useMemo} from "react";
import {NavbarContext} from "../context/navbar-context.ts";
import {HeroLink} from "../components/Hero.tsx";
import {SkillsLink} from "../components/Skills.tsx";
import {ExperiencesLink} from "../components/Experience.tsx";
import {ContactLink} from "../components/Contact.tsx";
import {ProjectsLink} from "../components/Projects.tsx";

const nav = [
  {
    link: HeroLink,
    icon: "Home",
  },
  {
    link: SkillsLink,
    icon: "Skills",
  },
  {
    link: ExperiencesLink,
    icon: "Experiences",
  },
  {
    link: ProjectsLink,
    icon: "Projects",
  },
  {
    link: ContactLink,
    icon: "Contacts",
  },
]

const Navbar = () => {
  const context = useContext(NavbarContext)

  const activeItem = useMemo(() => {
    let result;
    Object.keys(context.item).forEach((key) => {
      if (context.item[key])
        result = key;
    })
    return result;
  }, [context])

  return (
    <div className="w-full flex justify-center">
      <nav
        className="fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 top-10"
      >
        {nav.map((item) => (
          <a
            href={item.link}
            className={`p-2.5 rounded-full sm:cursor-pointer 
     ${item.link === activeItem && "bg-blend-darken text-[#007aff]"} `}
          >
            {item.icon}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
