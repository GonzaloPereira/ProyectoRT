import React, { useState, useReducer } from "react";
import Alert from "@mui/material/Alert";

function formReducer(state, event) {
  return {
    ...state,
    [event.name]: event.value,
  };
}

export default function SendData() {
  const [formData, setFormData] = useReducer(formReducer, { X: 0, Q: 0 });
  const [seeSent, setSeeSent] = useState(false);
  const [error, setError] = useState("");

  async function send_data() {
    return fetch(
      `http://mprojectsdb.gq/ProyectoRT/sendposition.php?X=${formData.X}&Y=${formData.Q}&Z=${0}&T=${Math.round(
        Date.now() / 1000
      )}`
    );
  }
  async function getLastTime() {
    return fetch("http://mprojectsdb.gq/ProyectoRT/getLastTime.php").then((res) => res.json());
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const lastTime = Number(await getLastTime());
      if (Math.round(Date.now() / 1000) - lastTime < 8) {
        throw new Error("Wait some seconds between requests");
      }
      if (formData.X < 0 || formData.X > 20 || formData.Q < 0 || formData.Q > 90) {
        throw new Error("Request out of range");
      }
      const res = await send_data();
      if (!res.ok) throw new Error();
      setSeeSent(true);
      setTimeout(() => setSeeSent(false), 3000);
    } catch (err) {
      setSeeSent(false);
      if (err.message === "Wait some seconds between requests" || err.message === "Request out of range") {
        setError(err.message);
      } else {
        setError("Couldn't send position");
      }
      setTimeout(() => setError(""), 3000);
    }
  }
  function handleChange(event) {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className="form">
      <h2>Send position</h2>
      <p>Write position with the three cordinates axis</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="x-coordinate">
          <p>X-coordinate</p>
          <input type="number" id="x-coordinate" name="X" value={formData.X} onChange={handleChange} />
        </label>
        <label htmlFor="q-coordinate">
          <p>Theta-coordinate</p>
          <input type="number" id="q-coordinate" name="Q" value={formData.Q} onChange={handleChange} />
        </label>
        <p>{"0 cm <= X <= 20 cm"}</p>
        <p>{"0° <= Theta <= 90°"}</p>
        <button className="blue-submit-button" type="submit">
          Send
        </button>
        {seeSent && <Alert severity="success">Position sent successfully!</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
      </form>
    </div>
  );
}
