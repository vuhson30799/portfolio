// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {useElementOnScreen} from "../hooks/use-element-on-screen.ts";
import {useContext, useEffect} from "react";
import {NavbarContext} from "../context/navbar-context.ts";
// @ts-ignore
import {Pagination} from "swiper";
import person_project from "../assets/images/Projects/person.png";
import project1 from "../assets/images/Projects/img1.png";
import project2 from "../assets/images/Projects/img2.png";
import project3 from "../assets/images/Projects/img3.png";

export const ProjectsLink = '#projects'

const ProjectsContent = {
  title: "Projects",
  subtitle: "",
  image: person_project,
  project_content: [
    {
      title: "Word Verification",
      image: project2,
      url: 'https://github.com/vuhson30799/word-verification'
    },
    {
      title: "My Portfolio",
      image: project1,
      url: 'https://github.com/vuhson30799/portfolio'
    },
    {
      title: "Document Management",
      image: project3,
      url: 'https://github.com/vuhson30799/document-management'
    },
  ],
}

const Projects = () => {
  const [ref, isVisible] = useElementOnScreen()
  const context = useContext(NavbarContext)
  useEffect(() => {
    context.setItem({
      ...context.item,
      [ProjectsLink]: isVisible
    })
  }, [isVisible]);
  return (
    <section className="bg-bg_light_primary" id="projects" ref={ref}>
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {ProjectsContent.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {ProjectsContent.subtitle}
          </h4>
          <br/>
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={ProjectsContent.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {ProjectsContent.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..."/>
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end" onClick={() => {
                    window.open(content.url, '_blank')
                  }}>
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
