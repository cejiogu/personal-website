import React from 'react';
import './ProfilePicture.css';
import headShot from '../../images/Trimmed Headshot.jpg';

function ProfilePicture() {
  // const onClickFunction = (event) => ();

  return (
    <a href="https://linkedin.com/in/chimdi-ejiogu"> <img className="headshot" src={headShot} alt="A headshot of Chimdi Ejiogu"/></a>
  );
}

export default ProfilePicture;

