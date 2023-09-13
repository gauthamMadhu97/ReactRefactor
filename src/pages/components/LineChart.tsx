import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

declare type LineChartProps = {
  data: {
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      pointRadius: number;
      yaxis:number
    }[];
  };
};
const graph_axis_data=(data:any)=>{
  const numbers = data
  console.log(data)
return  Math.max(...numbers);


}
export function LineChart({ data }: LineChartProps) {
   const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        align:'end' as const,
        labels: {
          padding: 10
      }
        
      },
    },
    scales: {
      y: {
        grid: {
          display: false
       },
        min: 0,
        max: graph_axis_data(data.datasets[0].data),
        ticks: {
          stepSize: data.datasets[0].data.length,
        },
      },
      x:{
        grid: {
          display: false
       }
      }
    },
  };

  return (
    <div className="h-80 w-full">
      <Line options={options} data={data} />
    </div>
  );
}
