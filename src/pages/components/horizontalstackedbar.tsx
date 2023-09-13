import React from 'react';
import { Bar } from 'react-chartjs-2';

interface HorizontalStackBarProps {
  data: number[][];
  labels: string[];
  colors: string[];
}

const HorizontalStackBar: React.FC<HorizontalStackBarProps> = ({ data, labels, colors }) => {
  const chartData = {
    labels: labels,
    datasets: data.map((stack, index) => ({
      label: `Stack ${index + 1}`,
      data: stack,
      backgroundColor: colors[index],
    })),
  };

  const chartOptions : any = {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default HorizontalStackBar;
