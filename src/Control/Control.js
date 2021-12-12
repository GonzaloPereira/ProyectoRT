import React from "react";
import SendData from "./SendData";
import ReceiveData from "./ReceiveData";
import "./Control.css";

export default function Control() {
  return (
    <div className="control">
      <SendData /> <ReceiveData />
    </div>
  );
}
