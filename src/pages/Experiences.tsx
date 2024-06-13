import React from 'react';
import './Experiences.css';
import SearchBar from '../components/SearchBar/SearchBar';

function Experiences() {
  return (
    <div className="text" style={{padding: "20px", textAlign: "center"}}>
      <h2>Past Projects</h2>
      <SearchBar />
    </div>
  );
}

export default Experiences;