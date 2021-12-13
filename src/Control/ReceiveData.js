import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";

export default function ReceiveData() {
  let array_zeros = [];
  for (let i = 0; i < 100; i++) array_zeros.push(0);

  const [x1, set_x1] = useState(array_zeros);
  const [dx1, set_dx1] = useState(array_zeros);
  const [v1, set_v1] = useState(array_zeros);

  const [x2, set_x2] = useState(array_zeros);
  const [dx2, set_dx2] = useState(array_zeros);
  const [v2, set_v2] = useState(array_zeros);

  const x1_ref = ref(database, "charts/x1");
  const dx1_ref = ref(database, "charts/dx1");
  const v1_ref = ref(database, "charts/v1");

  const x2_ref = ref(database, "charts/x2");
  const dx2_ref = ref(database, "charts/dx2");
  const v2_ref = ref(database, "charts/v2");

  useEffect(() => {
    onValue(x1_ref, (snapshot) => {
      set_x1((prev) => {
        let temp = prev.slice(1);
        return [...temp, snapshot.val()];
      });
      set_dx1((prev) => {
        let temp = prev.slice(1);
        return [...temp, temp[temp.length - 1]];
      });
    });

    onValue(dx1_ref, (snapshot) => {
      set_dx1((prev) => {
        let temp = prev.slice(1);
        return [...temp, snapshot.val()];
      });
    });

    onValue(v1_ref, (snapshot) => {
      set_v1((prev) => {
        let temp = prev.slice(1);
        return [...temp, snapshot.val()];
      });
    });

    onValue(x2_ref, (snapshot) => {
      set_x2((prev) => {
        let temp = prev.slice(1);
        return [...temp, snapshot.val()];
      });
      set_dx2((prev) => {
        let temp = prev.slice(1);
        return [...temp, temp[temp.length - 1]];
      });
    });

    onValue(dx2_ref, (snapshot) => {
      set_dx2((prev) => {
        let temp = prev.slice(1);
        return [...temp, snapshot.val()];
      });
    });

    onValue(v2_ref, (snapshot) => {
      set_v2((prev) => {
        let temp = prev.slice(1);
        return [...temp, snapshot.val()];
      });
    });
  }, []);

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
