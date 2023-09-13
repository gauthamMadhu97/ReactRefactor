import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


declare type CurvedGraphProps = {
  title: string;
  graphData : []
}

export default function VerticalChart({
 
  graphData = []
}:CurvedGraphProps) {
  // Generate fake data
  const d = new Date();
  const months = Array.from({length: d.getMonth()+1}, (e, i) => {
   return new Date(d.getFullYear(), i , 1).toLocaleDateString("en", {month: "short"});
  })

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Average time to resolution (in hours)',
        data: graphData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4, // Set tension to create a curved graph
      },
    ],
  };

  const options : any = {
    responsive: true,
    maintainAspectRatio: true,
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
      <Bar id="curved-graph"  data={data} options={options} />
    </div>
  );
};
