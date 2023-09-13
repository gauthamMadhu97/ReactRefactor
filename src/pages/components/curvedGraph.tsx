import React, { useEffect } from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

declare type CurvedGraphProps = {
  title: string;
  graphData : []
}

export default function CurvedGraph({
  title = '',
  graphData = []
}:CurvedGraphProps) {
  // Generate fake data
  const generateData = (): number[] => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(Math.floor(Math.random() * 10) + 1);
    }
    console.log("data ",data);
    return data;
  };
  const d = new Date();
  const months : any = Array.from({length: d.getMonth()+1}, (e: any, i: any) => {
   return new Date(d.getFullYear(), i , 1).toLocaleDateString("en", {month: "short"});
  })
  const data = {
    labels: months,
    datasets: [
      {
        label: title,
        data: graphData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4, // Set tension to create a curved graph
      },
    ],
  };

 
const options : any = {
  responsive: true,
  maintainAspectRatio: false,
  height: 600, // Set the desired height in pixels
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        padding: 10,
      },
    },
  },
};


  return (
    <div>
 
      <Line id="curved-graph" data={data} options={options} />
    </div>
  );
};
