import spring from "../assets/images/Skills/spring.png";
import java from "../assets/images/Skills/java.png";
import jenkins from "../assets/images/Skills/jenkins.png";
import reactjs from "../assets/images/Skills/react.png";
import typescript from "../assets/images/Skills/typescript.png";
import docker from "../assets/images/Skills/docker.png";
import postgres from "../assets/images/Skills/postgres.png";
import tailwind from "../assets/images/Skills/tailwind.png";
import kubernetes from "../assets/images/Skills/kubernetes.png";
import {MdArrowForward} from "react-icons/md";
import {useElementOnScreen} from "../hooks/use-element-on-screen.ts";
import {useContext, useEffect} from "react";
import {NavbarContext} from "../context/navbar-context.ts";

const skills = {
  title: "Skills",
  subtitle: "MY TOP SKILLS",
  skills_content: [
    {
      name: "Java",
      para: "",
      logo: java,
    },
    {
      name: "Typescript",
      para: "",
      logo: typescript,
    },
    {
      name: "Docker",
      para: "",
      logo: docker,
    },
    {
      name: "Spring Framework",
      para: "",
      logo: spring,
    },
    {
      name: "React js",
      para: "",
      logo: reactjs,
    },
    {
      name: "Jenkins",
      para: "",
      logo: jenkins,
    },
    {
      name: "PostgreSQL",
      para: "",
      logo: postgres,
    },
    {
      name: "Tailwind",
      para: "",
      logo: tailwind,
    },
    {
      name: "Kubernetes",
      para: "",
      logo: kubernetes,
    },
  ],
  icon: MdArrowForward,
}

export const SkillsLink = '#skills'

const Skills = () => {
  const [ref, isVisible] = useElementOnScreen()
  const context = useContext(NavbarContext)
  useEffect(() => {
    context.setItem({
      ...context.item,
      [SkillsLink]: isVisible
    })
  }, [isVisible]);
  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills" ref={ref}>
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br/>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-6 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-12 group-hover:scale-125 duration-200"
                />
              </div>
              <div className="ml-5">
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
