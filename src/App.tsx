import React from 'react';
import NavigationBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
import ProfilePicture from './components/Images/ProfilePicture';
import './App.css';

function App() {
  return (
    <div className="App" >
      <div className="Header">
        <Title />
        <NavigationBar/>
      </div>
      <div className="Body">
        <ProfilePicture />
        <p>Hello</p>
      </div>
      <div className="Footer">
      Copyright © 2024 Chimdi Ejiogu. All rights reserved.
      </div>
    </div>
  );
}

/*
Notes:
- Look into "background" for dynamic background

*/

export default App;
