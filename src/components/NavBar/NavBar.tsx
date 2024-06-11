import React from 'react';
import PageTitle from './PageTitle/PageTitle';
// import Title from '../Title/Title';
import './NavBar.css';

const NavigationBar = () => {
  return (
    <div className="NavBar">
      <PageTitle name="About"/> 
      <PageTitle name="Experience"/> 
      <PageTitle name="Contact Me"/>
    </div>
  );
}

export default NavigationBar;