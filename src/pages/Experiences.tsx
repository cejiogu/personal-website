import React from 'react';
import './Experiences.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ProjectList from '../components/ProjectList/ProjectList';
import ProjectCard from '../components/ProjectCard/ProjectCard';


function Experiences() {
  return (
    <div className="text" style={{padding: "20px", textAlign: "center"}}>
      <h2 className="title">Past Projects</h2>
      <div className='project-display'>
        <SearchBar />
        <ProjectList />
      </div>
    </div>
  );
}

export default Experiences;