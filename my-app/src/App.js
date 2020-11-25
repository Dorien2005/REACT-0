import React from 'react';
import './App.css';
import Clicker from './clicker.js';
import Layout from './layout.js';
import Header from './header.js';
import Achievements from './achievements.js';
import Building from './buildings.js';
import Nieuws from './nieuws.js';

function App() {
  return (
    <div className="App">
      <Clicker/ >
      <Layout/ >
      <Header />
      <Achievements />
      <Building />
      <Nieuws />
    </div>
  );
}

export default App;
