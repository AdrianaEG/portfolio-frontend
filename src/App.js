import React from 'react';

import './App.css';

import Header from './components/header/Header';
import Index from './components/index/Index';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Education from './components/education/Education'

function App() {
  return (
    <div className="content">
      <Header />
      <div className="main">
        <Index />
        <Projects />
        <Education />
      </div>
      
    </div>
  );
}

export default App;
