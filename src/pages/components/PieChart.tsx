import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

type data = {
  name: string;
  value: number;
}[];

export default function PieChart({ data }: { data: data }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          usePointStyle: true, 
          boxWidth: 6, // Adjust the width of the legend circles
          boxHeight: 6, // Adjust the height of the legend circles
          fontSize: 12, // Adjust the font size of legend labels// Render legend items as circles
          generateLabels: (chart: { data: any; getDatasetMeta: (arg0: number) => any; }) => {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label: any, i: string | number) => {
                const dataset = data.datasets[0];
                const meta = chart.getDatasetMeta(0);
                const total = meta.total;
    
                const value = dataset.data[i];
                const percentage = ((value / total) * 100).toFixed(2);
    
                return {
                  text: `${label} (${percentage}%)`,
                  fillStyle: dataset.backgroundColor[i],
                  hidden: isNaN(dataset.data[i]) || meta.data[i].hidden,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
  };

  let pieChartdata = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: ['#008080', // Teal
        '#FF6347', // Tomato
        '#00BFFF', // Deep Sky Blue
        '#8fbc8f', // darkseagreen
        '#bdb76b', // darkkhaki
        '#9370DB', // Medium Purple
        '#FFA07A', // Light Salmon
        '#00FF7F', // Spring Green
        '#BA55D3', // Medium Orchid
        '#FF4500', // Orange Red
      ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="relative h-[60vh] max-h-80 w-full mt-12">
      <Pie data={pieChartdata} options={options} />
    </div>
  );
}
