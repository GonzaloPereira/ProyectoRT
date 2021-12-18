import React from "react";

export default function Popup({ children, close }) {
  return (
    <div className="popup-out" onMouseDown={close}>
      <div className="popup-in" onMouseDown={(e) => e.stopPropagation()}>
        <p className="popup-close-icon" onClick={close}>
          X
        </p>
        {children}
      </div>
    </div>
  );
}
