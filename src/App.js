import React from 'react';
import logo from './logo_coderhouse_2.png';
import './App.css';
import Navbar from './navbar/Navbar.js';

function App() {
  return (
    <div className="App">
    <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Happy coding at CoderHouse.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
