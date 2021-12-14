import React, { useState, useEffect, useRef } from "react";
import SendData from "./SendData";
import ReceiveData from "./ReceiveData";
import "./Control.css";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";

export default function Control() {
  const array_zeros = [];
  for (let i = 0; i < 100; i++) array_zeros.push(0);

  const [x1, set_x1] = useState(array_zeros);
  const [dx1, set_dx1] = useState(array_zeros);
  const [v1, set_v1] = useState(array_zeros);

  const [x2, set_x2] = useState(array_zeros);
  const [dx2, set_dx2] = useState(array_zeros);
  const [v2, set_v2] = useState(array_zeros);

  const charts_ref = ref(database, "charts");
  useEffect(() => {
    onValue(charts_ref, (snapshot) => {
      const value = snapshot.val();
      set_x1((prev) => prev.slice(1));
      set_dx1((prev) => prev.slice(1));
      set_v1((prev) => prev.slice(1));
      set_x2((prev) => prev.slice(1));
      set_dx2((prev) => prev.slice(1));
      set_v2((prev) => prev.slice(1));
      set_x1((prev) => [...prev, value.x1]);
      set_dx1((prev) => [...prev, value.dx1]);
      set_v1((prev) => [...prev, value.v1]);
      set_x2((prev) => [...prev, value.x2]);
      set_dx2((prev) => [...prev, value.dx2]);
      set_v2((prev) => [...prev, value.v2]);
    });
  }, []);

  return (
    <div className="control">
      <SendData />
      <ReceiveData x1={x1} dx1={dx1} v1={v1} x2={x2} dx2={dx2} v2={v2} />
    </div>
  );
}
