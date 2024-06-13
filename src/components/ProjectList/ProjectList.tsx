import React from 'react';
import './ProjectList.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectList = () => {
  return (
    <div className="outer-box">
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default ProjectList;