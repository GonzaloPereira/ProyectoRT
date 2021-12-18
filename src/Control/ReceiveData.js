import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import FullCharts from "./FullCharts";

export default function ReceiveData({ P1, SP1, U1, V1, E1, T1, P2, SP2, U2, V2, E2, T2 }) {
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
        data: P1,
        color: "blue",
      },
      {
        name: "Set-point",
        data: SP1,
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
        data: P2,
        color: "blue",
      },
      {
        name: "Desired position",
        data: SP2,
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
        data: U1,
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
        data: U2,
        color: "green",
      },
    ],
  };
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  return (
    <div className="receive-data">
      <div className="chart">
        <h2>Motor 1</h2>
        <HighchartsReact highcharts={Highcharts} options={options1} />
      </div>
      <div className="chart">
        <h2>Motor 2</h2>
        <HighchartsReact highcharts={Highcharts} options={options2} />
      </div>
      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options3} />
        <button className="blue-submit-button" style={{ width: "50%" }} onClick={() => setOpenFirst(true)}>
          Open full data
        </button>
      </div>
      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options4} />
        <button className="blue-submit-button" style={{ width: "50%" }} onClick={() => setOpenSecond(true)}>
          Open full data
        </button>
      </div>
      {openFirst && <FullCharts P={P1} SP={SP1} U={U1} V={V1} E={E1} T={T1} close={() => setOpenFirst(false)} N={1} />}
      {openSecond && (
        <FullCharts P={P2} SP={SP2} U={U2} V={V2} E={E2} T={T2} close={() => setOpenSecond(false)} N={2} />
      )}
    </div>
  );
}
