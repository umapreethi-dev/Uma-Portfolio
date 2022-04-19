import  profpic from "../images/Umapreethi_santhanakrishnan.jpg"

function About(){
    return(
        <div class="container">
            <h2>About Me</h2>
            <div className="row about">
                <div className="col-4">
                  <img src={profpic} alt="pro-pic" height="300" width="250" className="profile-pic"></img>
                </div>
                <div className="col-8">
                <p>A self-taught Front-End Developer skilled in HTML, CSS, JS, React and WordPress.</p>
                <p> I am passionate about design and development of website using modern technologies.</p>
                <div className="skills">
                    
                        <span className="skill">HTML</span>
                        <span className="skill">CSS</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">React</span>
                        <span className="skill">BootStrap</span>
                        <span className="skill">Material UI</span>
                        <div style={{margin: "3%"}}>
                        <span className="skill">Node JS</span>
                        <span className="skill">MySQL</span>
                        <span className="skill">MongoDB</span>
                        <span className="skill">Express</span>
                        <span className="skill">WordPress</span>
                        </div>
                       
                    
                </div>
                </div>

            </div>
            
      </div>
    )
}

export default About;