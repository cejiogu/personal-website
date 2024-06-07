import React from 'react';
import Title from './components/Title/Title';
import PageTitle from './components/PageTitle/PageTitle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <PageTitle name="About"/>
    </div>
  );
}

export default App;
