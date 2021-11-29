
import React from 'react';
import './App.css';
import SendData from './SendData';

function App() {
  return (
    <div className="App">
      <div className='logo header'>
        <img src='logo_uni.png'></img>
      </div>
      <div className='header'><h2>Team</h2></div>
      <div className='header'><h2>Send data</h2></div>
      <div className='header'><h2>Extra</h2></div>
      <main className='content'><SendData /></main>
    </div>
  );
}

export default App;
