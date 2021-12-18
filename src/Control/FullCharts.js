import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Popup from "../Popup";
import base1 from "./Base01.png";
import base2 from "./Base02.png";
import eje1 from "./Mov01.png";
import eje2 from "./Mov02.png";

export default function FullCharts({ P, SP, U, V, E, T, close, N }) {
  const optionsGeneral = {
    chart: {
      type: "spline",
      animation: false,
      height: 230,
      width: 800,
    },
    plotOptions: {
      series: {
        marker: false,
      },
    },
    xAxis: {
      title: {
        text: "Time",
      },
    },
    credits: false,
  };
  const options1 = {
    ...optionsGeneral,
    title: {
      text: "Position",
    },
    series: [
      {
        name: "Actual position",
        data: P,
        color: "blue",
      },
      {
        name: "Set-point",
        data: SP,
        color: "red",
      },
    ],
    yAxis: {
      title: {
        text: "Position",
      },
    },
  };
  const options2 = {
    ...optionsGeneral,
    title: {
      text: "Control signal",
    },
    series: [
      {
        name: "Control signal",
        data: U,
        color: "green",
      },
    ],
  };
  const options3 = {
    ...optionsGeneral,
    title: {
      text: "Error",
    },
    series: [
      {
        name: "Error",
        data: E,
        color: "red",
      },
    ],
  };
  const options4 = {
    ...optionsGeneral,
    title: {
      text: "Speed",
    },
    series: [
      {
        name: "Speed",
        data: V,
        color: "blue",
      },
    ],
  };
  const options5 = {
    ...optionsGeneral,
    title: {
      text: "Torque",
    },
    series: [
      {
        name: "Torque",
        data: T,
        color: "violet",
      },
    ],
  };
  const posImg = 200 + (160 * P[P.length - 1]) / 200;
  return (
    <Popup close={close}>
      <div className="full-charts">
        <h2 style={{ position: "fixed", top: "0.5rem", left: "3rem" }}>Motor {N}</h2>
        {N == 1 ? (
          <div className="animation1">
            <img className="img1" src={base1} />
            <img className="img2" src={eje1} style={{ left: `${posImg}px` }} />
          </div>
        ) : (
          <div className="animation2">
            <img className="img1" src={base2} />
            <img className="img2" src={eje2} />
          </div>
        )}
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options1} />
        </div>
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options2} />
        </div>
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options3} />
        </div>
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options4} />
        </div>
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options5} />
        </div>
      </div>
    </Popup>
  );
}
