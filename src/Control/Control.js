import React, { useState, useEffect, useRef } from "react";
import SendData from "./SendData";
import ReceiveData from "./ReceiveData";
import "./Control.css";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";

export default function Control() {
  const array_zeros = Array(100).fill(0);

  const [x1, set_x1] = useState(array_zeros);
  const [dx1, set_dx1] = useState(array_zeros);
  const [u1, set_u1] = useState(array_zeros);

  const [x2, set_x2] = useState(array_zeros);
  const [dx2, set_dx2] = useState(array_zeros);
  const [u2, set_u2] = useState(array_zeros);

  const x1_ref = ref(database, "charts/x1");
  const dx1_ref = ref(database, "charts/dx1");
  const u1_ref = ref(database, "charts/u1");

  const x2_ref = ref(database, "charts/x2");
  const dx2_ref = ref(database, "charts/dx2");
  const u2_ref = ref(database, "charts/u2");

  useEffect(() => {
    onValue(x1_ref, (snapshot) => {
      set_x1((prev) => prev.slice(1));
      set_x1((prev) => [...prev, snapshot.val()]);
    });

    onValue(dx1_ref, (snapshot) => {
      set_dx1(() => Array(100).fill(snapshot.val()));
    });

    onValue(u1_ref, (snapshot) => {
      set_u1((prev) => prev.slice(1));
      set_u1((prev) => [...prev, snapshot.val()]);
    });

    onValue(x2_ref, (snapshot) => {
      set_x2((prev) => prev.slice(1));
      set_x2((prev) => [...prev, snapshot.val()]);
    });

    onValue(dx2_ref, (snapshot) => {
      set_dx2(() => Array(100).fill(snapshot.val()));
    });

    onValue(u2_ref, (snapshot) => {
      set_u2((prev) => prev.slice(1));
      set_u2((prev) => [...prev, snapshot.val()]);
    });
  }, []);

  return (
    <div className="control">
      <SendData />
      <ReceiveData x1={x1} dx1={dx1} u1={u1} x2={x2} dx2={dx2} u2={u2} />
    </div>
  );
}
