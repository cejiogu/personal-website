import React from 'react';
import NavigationBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

// Pages
import About from './pages/About';
import Home from './pages/Home';
import Experiences from './pages/Experiences'; // Page is titled 'Past Projects'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Title />
        <NavigationBar/>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/past-projects" element={<Experiences />} />
        </Routes>
      </Router>
      <div className="Footer">
        <p>Copyright © 2024 Chimdi Ejiogu. All rights reserved.</p>
      </div>
    </div>
  );
}

/*
Notes:
- Look into "background" for dynamic background

*/

export default App;
