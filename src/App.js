import React, { useState } from "react";
import "./App.css";
import Team from "./Team";
import Extra from "./Extra";
import Control from "./Control/Control";

function App() {
  const [windows, setWindows] = useState("control");

  return (
    <div className="App">
      <div className="logo header">
        <img src="logo-uni.png" alt="logo uni" />
        <h1>UNIVERSIDAD NACIONAL DE INGENIERIA</h1>
      </div>
      <div className="header" onClick={() => setWindows("team")}>
        <h2>Team</h2>
      </div>
      <div className="header" onClick={() => setWindows("control")}>
        <h2>Control</h2>
      </div>
      <div className="header" onClick={() => setWindows("extra")}>
        <h2>Extra</h2>
      </div>
      <main className="content">
        {windows == "team" ? <Team /> : <>{windows == "control" ? <Control /> : <Extra />}</>}
      </main>
    </div>
  );
}

export default App;
