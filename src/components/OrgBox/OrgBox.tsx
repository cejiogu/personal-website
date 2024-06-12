import React from 'react';

const Organization = (props: {name: string; img: string; position: string; desc: string}) => {
  return (
    <div className="OrgBox">
      <img src={props.img} alt={`This is the logo of the organization '${props.name}'`}/>
      <h3>{props.name}</h3>
      <p>Position: {props.position}</p>
      <p>Description: {props.desc}</p>
    </div>
  );
} 

export default Organization;