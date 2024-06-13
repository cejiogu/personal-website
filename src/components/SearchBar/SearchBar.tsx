import React from 'react';
import './SearchBar.css';


// Will later pass projects as part of props argument
const SearchBar = () => {
  
  return (
    <div className="outerBox">
      <div>
        <input className="bar" type="text" placeholder="Search here" />
      </div>
      <div className="label-box">
        <p className="text" style={{textAlign: "center", paddingTop: '5px', color: 'rgba(132, 131, 131, 1)'}}>Labels</p>
      </div>
    </div>
  );
}

export default SearchBar;