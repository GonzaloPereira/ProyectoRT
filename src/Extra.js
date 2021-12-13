import React from "react";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Extra() {
  return (
    <div className="center">
      <div className="form extra">
        <h2>Extra</h2>
        <h3>Links and others:</h3>
        <div
          className="extra-link"
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1vlfB3esmx0-3g_vOxHettdvpv15j-ucD?usp=sharing_eil_m&ts=616f208b",
              "_blank"
            )
          }
        >
          <p>Google drive</p> <CloudCircleIcon />
        </div>
        <div
          className="extra-link"
          onClick={() => window.open("https://github.com/GonzaloPereira/ProyectoRT", "_blank")}
        >
          <p>Github (interface)</p>
          <GitHubIcon />
        </div>
        <p>Special thanks to professor Roberto Furukawa</p>
      </div>
    </div>
  );
}
