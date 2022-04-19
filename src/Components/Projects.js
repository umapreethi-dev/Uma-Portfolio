

export default function Projects(props){
    return(
        <div className="project">
            <div className="row">
                <div className="col-7">
                    <p className="project-subtitle">{props.subtitle}</p>
                    <h3>{props.title}</h3>
                   <div>Skills</div>
                     <p>{props.content}</p>
                    <button className="primary-button">live  project</button>
                    <button className="primary-button">Github</button>
                </div>
                <div className="col-5">
                    <img src={props.img} alt="" height="300" width="300"
                    className="project-image"
                    ></img>
                </div>
            </div>
        </div>
    )
}