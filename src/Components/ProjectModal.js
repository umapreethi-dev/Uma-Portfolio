import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsGithub } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

export default function ProjectModal(props){
    console.log(props)
    return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{props.skill}</h5>
        <p>
           {props.content}
        </p>
        <div className="row gx-5">
            <div className="col ">
                <img src={props.img} height="200" width="200"/>
            </div>
            <div className="col ">
                <img src={props.img} height="200" width="200"/>
            </div>
            <div className="col ">
                <img src={props.img} height="200" width="200"/>
            </div>
        </div>
        <div className="row gx-5 project-links">
            <div className="col">
            <a href="#" className="link1"><BsGithub size={30} /> See Project </a>
            </div>

            <div className="col">
            <a href="#" className="link2"><BiRightArrowAlt size={30} /> See Website</a>
            </div>
           
           
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}