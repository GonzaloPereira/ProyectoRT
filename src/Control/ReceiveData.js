import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ReceiveData({ x1, dx1, v1, x2, dx2, v2 }) {
  const optionsGeneral = {
    chart: {
      type: "line",
      animation: false,
      height: 250,
      width: 450,
    },
    plotOptions: {
      series: {
        marker: false,
      },
    },
  };
  const options1 = {
    ...optionsGeneral,
    title: {
      text: "Junta 1",
    },
    series: [
      {
        name: "Actual position",
        data: x1,
        color: "blue",
      },
      {
        name: "Desired position",
        data: dx1,
        color: "red",
      },
    ],
  };
  const options2 = {
    ...optionsGeneral,
    title: {
      text: "Junta 2",
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
  };
  const options3 = {
    ...optionsGeneral,
    title: {
      text: "Junta 1",
    },
    series: [
      {
        name: "Speed",
        data: v1,
        color: "green",
      },
    ],
  };
  const options4 = {
    ...optionsGeneral,
    title: {
      text: "Junta 2",
    },
    series: [
      {
        name: "Speed",
        data: v2,
        color: "green",
      },
    ],
  };
  return (
    <div className="receive-data">
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
    </div>
  );
}
