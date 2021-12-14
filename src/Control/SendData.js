import React, { useState, useReducer } from "react";
import Alert from "@mui/material/Alert";
import { database } from "./firebase";
import { ref, child, get, set, update } from "firebase/database";

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

  function send_data() {
    set(ref(database, "request/"), {
      x: Number(formData.X),
      q: Number(formData.Q),
      t: Math.round(Date.now() / 1000),
    });
    update(ref(database, "charts/"), {
      dx1: Number(formData.X),
      dx2: Number(formData.Q),
    });
  }
  async function getLastTime() {
    const dbRef = ref(database);
    return (await get(child(dbRef, "request/t"))).val();
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
      send_data();
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
    <div className="form send-data">
      <h2>Send position</h2>
      <p>Write position with the three cordinates axis</p>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <button className="blue-submit-button" type="submit">
          Stop Robot
        </button>
        <button className="blue-submit-button" type="submit">
          Home Robot
        </button>
      </div>
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
