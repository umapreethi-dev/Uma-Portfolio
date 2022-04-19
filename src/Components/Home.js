import { BsGithub  } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import About from "./About";
import Projects from "./Projects";
import data from "./ProjectData"

export default function Home() {
    const project = data.map(item => {
        return <Projects 
        subtitle={item.subtitle} 
        title={item.title}
        content = {item.content}
        view = {item.view}
        github = {item.github}
        img = {item.img}
        />
    })
    return(
        <div className="container">
            <div className="row banner-section">
                <div className="col-5">
                <h1> Hi, I'm Umapreethi Santhanakrishnan | Software Engineer </h1>
                <div className="social-icons">
                    <BsGithub size={30}/>
                    <BsLinkedin className="social-icon" size={30}/>
                    <MdEmail className="social-icon" size={30}/>
                </div>
                <div className="banner-content">
                    <p>A self-taught Front-End Developer skilled in HTML, CSS, JS, React and WordPress. I am passionate about design and development of website using modern technologies.</p>
                </div>
                </div>
            </div>
            <div className="row about-section">
                <About />
            </div>
            <div className="row project-section">
                <h2>Projects</h2>
                {project}
            </div>
        </div>
    )
}