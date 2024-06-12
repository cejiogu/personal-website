import React from 'react';
import ProfilePicture from '../components/Images/ProfilePicture';

const Home = () => {
  return (
    <React.Fragment>
      <div className="TopSection">
        <ProfilePicture />
        <div className="IntroText" style={{padding: "30px"}}>
          <h2 className="text">I am a...</h2>
          <p className="text" style={{maxWidth: "800px", paddingLeft: "25px", fontSize: "22px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className="MidSection" style={{display: "inline-flex"}}>
          <div style={{paddingLeft: "25px", maxWidth: "600px"}}>
            <h3 className="text" style={{display: "flex",justifyContent: "center"}}>Title</h3>
            <p className="text" style={{fontSize: "22px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Home;