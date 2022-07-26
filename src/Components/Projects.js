import { BsGithub } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";

import { useState } from "react";

export default function Projects(props) {
  return (
    <div className={`card mb-3 ${props.bgColor}`}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={props.img} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p style={{ textTransform: "uppercase", fontSize: "12px" }}>
              {props.subtitle}
            </p>
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.content}</p>
            <p>{props.skill}</p>
            <a href="#" className="link1">
              Live Website <FaLongArrowAltRight />
            </a>
            <a href="#" className="link2">
              Github <FaLongArrowAltRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
