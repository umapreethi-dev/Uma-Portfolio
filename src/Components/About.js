import profpic from "../images/Umapreethi_santhanakrishnan.jpg";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
//import { TiHtml5 } from "react-icons/tb";

function About() {
  return (
    <div class="container">
      <h2>About Me</h2>
      <div className="row about">
        <div className="col-4">
          <img
            src={profpic}
            alt="pro-pic"
            height="300"
            width="250"
            className="profile-pic"
          ></img>
        </div>
        <div className="col-8">
          <p>
            A self-taught Front-End Developer skilled in HTML, CSS, JS, React
            and WordPress.
          </p>
          <p>
            {" "}
            I am passionate about design and development of website using modern
            technologies.
          </p>
          <div className="skills">
           <FaReact size={40} />
           <SiJavascript size={40} />
           <FaHtml5 size={40} />
           <FaCss3Alt size={40} />
           <FaBootstrap size={40} />
           <SiMaterialui size={40} />
           <SiNodedotjs size={40} />
           <SiMysql size={40} />
           <SiMongodb size={40} />
           <SiWordpress size={40} />
           {/* <TiHtml5 size={40} /> */}
            
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
