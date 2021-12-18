import React, { useState, useEffect, useRef } from "react";
import SendData from "./SendData";
import ReceiveData from "./ReceiveData";
import "./Control.css";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";

export default function Control() {
  const array_zeros = Array(100).fill(0);

  const [P1, set_P1] = useState(array_zeros);
  const [SP1, set_SP1] = useState(array_zeros);
  const [lastSP1, set_lastSP1] = useState(array_zeros);
  const [U1, set_U1] = useState(array_zeros);
  const [V1, set_V1] = useState(array_zeros);
  const [E1, set_E1] = useState(array_zeros);
  const [T1, set_T1] = useState(array_zeros);

  const [P2, set_P2] = useState(array_zeros);
  const [SP2, set_SP2] = useState(array_zeros);
  const [lastSP2, set_lastSP2] = useState(array_zeros);
  const [U2, set_U2] = useState(array_zeros);
  const [V2, set_V2] = useState(array_zeros);
  const [E2, set_E2] = useState(array_zeros);
  const [T2, set_T2] = useState(array_zeros);

  const P1_ref = ref(database, "charts/P1");
  const SP1_ref = ref(database, "charts/SP1");
  const U1_ref = ref(database, "charts/U1");
  const V1_ref = ref(database, "charts/V1");
  const E1_ref = ref(database, "charts/E1");
  const T1_ref = ref(database, "charts/T1");

  const P2_ref = ref(database, "charts/P2");
  const SP2_ref = ref(database, "charts/SP2");
  const U2_ref = ref(database, "charts/U2");
  const V2_ref = ref(database, "charts/V2");
  const E2_ref = ref(database, "charts/E2");
  const T2_ref = ref(database, "charts/T2");

  useEffect(() => {
    set_SP1((prev) => prev.slice(1));
    set_SP1((prev) => [...prev, lastSP1]);
  }, [P1]);

  useEffect(() => {
    set_SP2((prev) => prev.slice(1));
    set_SP2((prev) => [...prev, lastSP2]);
  }, [P2]);

  useEffect(() => {
    onValue(P1_ref, (snapshot) => {
      set_P1((prev) => prev.slice(1));
      set_P1((prev) => [...prev, snapshot.val()]);

      set_E1((prev) => prev.slice(1));
      set_E1((prev) => [...prev, Math.abs(snapshot.val() - SP1[SP1.length - 1])]);
    });

    onValue(SP1_ref, (snapshot) => {
      set_lastSP1(snapshot.val());
    });

    onValue(U1_ref, (snapshot) => {
      set_U1((prev) => prev.slice(1));
      set_U1((prev) => [...prev, snapshot.val()]);
    });

    onValue(V1_ref, (snapshot) => {
      set_V1((prev) => prev.slice(1));
      set_V1((prev) => [...prev, snapshot.val()]);
    });

    onValue(T1_ref, (snapshot) => {
      set_T1((prev) => prev.slice(1));
      set_T1((prev) => [...prev, snapshot.val()]);
    });

    onValue(P2_ref, (snapshot) => {
      set_P2((prev) => prev.slice(1));
      set_P2((prev) => [...prev, snapshot.val()]);
    });

    onValue(SP2_ref, (snapshot) => {
      set_lastSP2(snapshot.val());
    });

    onValue(U2_ref, (snapshot) => {
      set_U2((prev) => prev.slice(1));
      set_U2((prev) => [...prev, snapshot.val()]);
    });

    onValue(V2_ref, (snapshot) => {
      set_V2((prev) => prev.slice(1));
      set_V2((prev) => [...prev, snapshot.val()]);
    });

    onValue(T2_ref, (snapshot) => {
      set_T2((prev) => prev.slice(1));
      set_T2((prev) => [...prev, snapshot.val()]);
    });
  }, []);

  return (
    <div className="control">
      <SendData />
      <ReceiveData
        P1={P1}
        SP1={SP1}
        U1={U1}
        V1={V1}
        E1={E1}
        T1={T1}
        P2={P2}
        SP2={SP2}
        U2={U2}
        V2={V2}
        E2={E2}
        T2={T2}
      />
    </div>
  );
}
