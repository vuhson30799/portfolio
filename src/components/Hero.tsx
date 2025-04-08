import Hero_person from "../assets/images/Hero/person.png";
import {useElementOnScreen} from "../hooks/use-element-on-screen.ts";
import {useContext, useEffect} from "react";
import {NavbarContext} from "../context/navbar-context.ts";

const hero = {
  title: "Software Engineer",
  firstName: "SON HOANG",
  LastName: "VU",
  btnText: "Contact me",
  image: Hero_person,
  description: [
    {
      count: "3+",
      text: "Dedicated Software Developer with 4 years of experience, specializing in backend development and passionate about evolving into a Full-Stack Developer.",
    },
    {
      count: "3+",
      text: "Skilled in building scalable, efficient systems and eager to manage the entire software development lifecycle.",
    },
    {
      count: "5+",
      text: "Adept at backend technologies and enthusiastic about mastering frontend frameworks to deliver end-to-end solutions.",
    },
  ]
}

export const HeroLink = '#home'

const Hero = () => {
 const [containerRef, isVisible] = useElementOnScreen()
  const context= useContext(NavbarContext)
  useEffect(() => {
    context.setItem({
      ...context.item,
      [HeroLink]: isVisible
    })
  }, [isVisible]);
  return (
    <section id="home" className="overflow-hidden" ref={containerRef}>
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br/>
          <div className="flex justify-end">
            <button className="btn"><a href="#contact">{hero.btnText}</a></button>
          </div>
          <div className="flex flex-col gap-10 mt-10 max-w-md">
            <ul data-aos="fade-down" className="list-disc">
              {hero.description.map((content, i) => (
                <li data-aos="fade-up"
                    data-aos-delay={i * 300} className="mb-3">
                  {content.text}
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[45rem] h-100">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
