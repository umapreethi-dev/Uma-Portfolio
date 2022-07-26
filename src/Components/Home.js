import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BiDownArrowCircle } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Projects from "./Projects";
import data from "./ProjectData";
import ParticleBackground from "./ParticleBackground";
import Testimonial from "./Testimonials";
import TechStack from "./TechStack";
import testData from "./Testimonial-data";
import Contact from "./Contact";

export default function Home() {
  const project = data.map((item) => {
    return (
      <Projects
        subtitle={item.subtitle}
        title={item.title}
        skill={item.skill}
        content={item.content}
        view={item.view}
        github={item.github}
        img={item.img}
        bgColor={item.color}
      />
    );
  });
  const testimonial = testData.map((item) => {
    return (
      <Testimonial
        title={item.title}
        name={item.name}
        testimonial={item.testimonial}
      />
    );
  });

  return (
    <div className="container-fluid home">
      <div className=" banner" id="text">
        <h1 className="banner-maintext">
          Hi, <br></br>I'm Uma, <br></br>{" "}
          <spam className="highlight">Front-End Web Developer</spam>
        </h1>
        <div className="social-icons">
          <a href="https://github.com/umapreethi-dev" className="link1">
            <BsGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/umapreethi-santhanakrishnan/"
            className="link1"
          >
            <BsLinkedin className="social-icon" size={30} />
          </a>
          <a href="mailto:umapreethi123.up@gmail.com" className="link1">
            {" "}
            <MdEmail className="social-icon" size={30} />
          </a>
        </div>
        <div className="banner-content">
          <p>
            A self-taught Front-End Developer skilled in HTML, CSS, JS, React
            and WordPress. I am passionate about design and development of
            website using modern technologies.
          </p>
        </div>
        <div className="banner-button">
          <a href="#tech" className="explore">
            EXPLORE
            <BiDownArrowCircle size={30} />
          </a>
          <div className="arrow"></div>
        </div>
      </div>
      <div className="particle-container">
        <ParticleBackground />
      </div>

      <div className="row tech-section" id="tech">
        <div className="col">
          <h2>Technical Skills</h2>
        </div>
        <div className="col">
          <TechStack />
        </div>
      </div>
      <div className="row project-section" id="projects">
        <h2 className="heading">Projects</h2>
        <div className="row">{project}</div>
      </div>
      <div className="row testimonial-section" id="testimonials">
        <h2 className="heading">Testimonials</h2>
        {testimonial}
      </div>
      <div className="row contact-section" id="contact">
        <Contact />
      </div>
    </div>
  );
}
