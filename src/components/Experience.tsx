import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography
} from "@material-tailwind/react";
import {MdOutlineTravelExplore, RiRocket2Line} from "react-icons/all";
import person from "../assets/images/Hireme/person.png";
import {useElementOnScreen} from "../hooks/use-element-on-screen.ts";
import {useContext, useEffect} from "react";
import {NavbarContext} from "../context/navbar-context.ts";

const experiences = {
  title: "Experiences",
  subtitle: "TIMELINE",
  content: [
    {
      title: "2025",
      para: () => (
        <ul className="list-disc">
          <li>Successfully <b>launched my portfolio</b>, showcasing my expertise, projects, and contributions to the
            tech industry.
          </li>
        </ul>
      )
    },
    {
      title: "2024",
      para: () => (
        <ul className="list-disc">
          <li>Recognized as <b>Mentor of the Year</b> at mgm technology partners Vietnam, guiding junior developers and
            fostering technical growth within the team.
          </li>
        </ul>
      )
    },
    {
      title: "2022",
      para: () => (
        <ul className="list-disc">
          <li>Delivered a kiosk management module, streamlining visitor control systems for a commercial building.</li>
          <li>Deployed <b>Word-Verification</b>, an assistive application designed for a specialized teaching
            environment.
          </li>
          <li>Traveled to Hamburg and Munich <MdOutlineTravelExplore size={25} color="red" className="inline"/> for an onsite
            project, gaining international exposure and collaborating with global teams.
          </li>
        </ul>
      )
    },
    {
      title: "2021",
      para: () => (
        <ul className="list-disc">
          <li>Developed Article-Prediction, an AI-based recommendation system that suggests books to users based on
            their reading preferences.
          </li>
          <li>Transitioned to a full-time software engineer at mgm technology partners Vietnam, working on large-scale
            enterprise projects.
          </li>
        </ul>
      )
    },
    {
      title: "2020",
      para: () => (
        <ul className="list-disc">
          <li>Designed and delivered a data visualization module for AI-powered check-out systems, as part of my
            Microcontroller coursework.
          </li>
          <li>Built TienLenServer_Client, a LAN-based multiplayer card game, enhancing my knowledge of networking and
            client-server architecture.
          </li>
          <li>Promoted to a part-time software engineer at mgm technology partners Vietnam, balancing work and studies
            while expanding my expertise in software development.
          </li>
        </ul>
      )
    },
    {
      title: "2017 - 2019",
      para: () => (
        <ul className="list-disc">
          <li>Pursued a degree at Danang University of Science and Technology, specializing in software engineering.
          </li>
          <li>Developed English-Dictionary-Game, my first application built with C++, which helped improve my
            programming skills and understanding of software development.
          </li>
          <li>Secured an internship at mgm technology partners Vietnam, gaining hands-on experience in a professional
            software development environment.
          </li>
        </ul>
      )
    },
  ],
}

export const ExperiencesLink = '#experiences'
const Experience = () => {
  const [ref, isVisible] = useElementOnScreen()
  const context = useContext(NavbarContext)
  useEffect(() => {
    context.setItem({
      ...context.item,
      [ExperiencesLink]: isVisible
    })
  }, [isVisible]);
  return (
    <section id="experiences" ref={ref}>
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {experiences.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {experiences.subtitle}
        </h4>
        <br/>
        <div className="flex gap-5 justify-center flex-wrap group flex-row">
          <img
            src={person}
            alt="..."
            data-aos="fade-right"
            data-aos-delay={200}
            className="max-w-[25vw] min-w-[22rem]"
          />
          <Timeline className="max-w-[20vw] flex flex-col gap-5">
            {experiences.content
              .map((item, i) => (
                <TimelineItem key={`timeline-${i}`}
                              data-aos="fade-up"
                              data-aos-delay={i * 200}
                              className={i === 0 ? '' : 'mt-4'}>
                  <TimelineConnector/>
                  <TimelineHeader className="h-3">
                    <TimelineIcon className="p-2 text-dark_primary">
                      <RiRocket2Line className="h-4 w-4"/>
                    </TimelineIcon>
                    <Typography variant="h6" color="blue-gray" className="leading-none">
                      {item.title}
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-2">
                    <div className="font-normal text-gray-600">
                      {item.para()}
                    </div>
                  </TimelineBody>
                </TimelineItem>
              ))
            }
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
