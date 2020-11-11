import React from 'react';

import './App.css';

import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="content">
      <Header />
      <div className="main">
        <About />
        <Projects />
      </div>
      
    </div>
  );
}

export default App;
