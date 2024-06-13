import React from 'react';
import './ProjectCard.css';
import ProjectImage from '../ProjectImage/ProjectImage';
import Headshot from '../../images/NSBE logo.jpg';

// function ProjectCard(props:{title: string; desc: string; img: string}) {
function ProjectCard () {
  return (
    <div className="outer-card">
      <ProjectImage img={Headshot} title={"NSBE"} />
      <div style={{marginLeft: "4%", maxWidth: "70%", maxHeight: "10%", textAlign: "start"}}>
        <h2> Title</h2>
        <p style={{marginTop: "-10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam tempor, faucibus tellus id, cursus ligula. Class aptent taciti sociosqu ad litora torquent per conubia...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel diam tempor, faucibus tellus id, cursus ligula.</p>
      </div>
      {/* {props.title}
      {props.desc}
      {props.img} */}

    </div>
  );
}

export default ProjectCard;