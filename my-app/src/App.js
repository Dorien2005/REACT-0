import React from 'react';
import './App.css';
import Clicker from './clicker.js';
import Layout from './layout.js';
import Text from './text.js';
import Achievements from './achievements.js';
import Building from './buildings.js'

function App() {
  return (
    <div className="App">
      <Clicker/ >
      <Layout/ >
      <Text />
      <Achievements />
      <Building />
    </div>
  );
}

export default App;
