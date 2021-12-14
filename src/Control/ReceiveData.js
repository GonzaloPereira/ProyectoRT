import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ReceiveData({ x1, dx1, u1, x2, dx2, u2 }) {
  const optionsGeneral = {
    chart: {
      type: "spline",
      animation: false,
      height: 250,
      width: 450,
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
        data: x1,
        color: "blue",
      },
      {
        name: "Set-point",
        data: dx1,
        color: "red",
      },
    ],
    yAxis: {
      title: {
        text: "Position cm",
      },
    },
  };
  const options2 = {
    ...optionsGeneral,
    title: {
      text: "Angular position",
    },
    series: [
      {
        name: "Actual position",
        data: x2,
        color: "blue",
      },
      {
        name: "Desired position",
        data: dx2,
        color: "red",
      },
    ],
    yAxis: {
      title: {
        text: "Position °",
      },
    },
  };
  const options3 = {
    ...optionsGeneral,
    title: {
      text: "Control signal",
    },
    series: [
      {
        name: "Control signal",
        data: u1,
        color: "green",
      },
    ],
  };
  const options4 = {
    ...optionsGeneral,
    title: {
      text: "Control signal",
    },
    series: [
      {
        name: "Control signal",
        data: u2,
        color: "green",
      },
    ],
  };
  return (
    <div className="receive-data">
      <div className="chart">
        <h2>Junta 1</h2>
        <HighchartsReact highcharts={Highcharts} options={options1} />
      </div>
      <div className="chart">
        <h2>Junta 2</h2>
        <HighchartsReact highcharts={Highcharts} options={options2} />
      </div>
      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options3} />
      </div>
      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options4} />
      </div>
    </div>
  );
}
