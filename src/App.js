import React, {useState} from 'react';
import './App.css';
import SendData from './SendData';
import Team from './Team';
import Extra from './Extra';

function App() {
  const [windows, setWindows] = useState('team');
  console.log(windows);
  return (
    <div className="App">
      <div className='logo header'>
        <img src='logo-uni.png' alt='logo uni'/>
        <h1>UNIVERSIDAD NACIONAL DE INGENIERIA</h1>
      </div>
      <div className='header' onClick={()=>setWindows('team')}><h2>Team</h2></div>
      <div className='header' onClick={()=>setWindows('send-data')}><h2>Send data</h2></div>
      <div className='header' onClick={()=>setWindows('extra')}><h2>Extra</h2></div>
      <main className='content'>{windows == 'team' ? <Team /> : <>{windows == 'send-data' ?<SendData/> : <Extra/>}</>}</main>
    </div>
  );
}

export default App;
