import React from 'react';
import './OrgBox.css';


// {name: string; img: string; position: string; desc: string}
const Organization = (props: {name: string; img: string}) => {
  return (
    <div className="OrgBox" style={{fontSize: "18px"}}>
      <div className="content-container">
        {/* Image inserted into stand-alone div for styling purposes*/}
        <div style={{maxWidth: "300px", textAlign: "center", display: "flex", justifyContent: "center"}}>
          <img style={{width: "250px", height: "250px", borderRadius: "10%"}} src={props.img} alt={`This is the logo of the organization '${props.name}'`}/>
        </div>
        <div style={{alignContent: "flex-end", position: "absolute", bottom: "15px"}}>
          <h3 className="text" style={{textAlign: "center", maxWidth: "300px"}}>{props.name}</h3>
          {/* <p className="text">Position: {props.position}</p>
          <p className="text">Description: {props.desc}</p> */}
        </div>
      </div>   
    </div>
  );
} 

export default Organization;