import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";

export default function ReceiveData() {
  const [points, setPoints] = useState([1, 2]);

  const int = ref(database, "test/int");
  useEffect(() => {
    onValue(int, (snapshot) => {
      const data = snapshot.val();
      if (points.length < 5) {
        setPoints((prev) => [...prev, data]);
      } else {
        setPoints((prev) => {
          prev.shift();
          return [...prev, data];
        });
      }
    });
  }, []);

  const optionsGeneral = {
    chart: {
      type: "spline",
      animation: Highcharts.svg,
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
      text: "Position J1",
    },
    series: [
      {
        data: points,
      },
    ],
  };
  return (
    <div className="receive-data">
      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options1} />
      </div>
      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options1} />
      </div>
      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options1} />
      </div>
      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={options1} />
      </div>
    </div>
  );
}
