import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(PointElement, LinearScale, Title, Tooltip, Legend);

// Data for the Scatter Chart
const data = {
  datasets: [
    {
      label: 'Sample Data',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 10 },
        { x: 25, y: 30 },
        { x: 30, y: 15 },
        { x: 40, y: 25 },
      ],
      backgroundColor: '#3b82f6', // Tailwind's blue-500
      pointRadius: 6, // Size of points
      pointHoverRadius: 8, // Size of points on hover
    },
  ],
};

// Options for the Scatter Chart
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#1f2937', // Tailwind's gray-800
        font: { size: 14 },
      },
    },
    tooltip: {
      backgroundColor: '#1f2937', // Tailwind's gray-800
      titleColor: '#ffffff', // Tailwind's white
      bodyColor: '#d1d5db', // Tailwind's gray-300
    },
    title: {
      display: true,
      text: 'Scatter Chart Example',
      color: '#1f2937', // Tailwind's gray-800
      font: { size: 16 },
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'X-Axis Label',
        color: '#1f2937', // Tailwind's gray-800
        font: { size: 14 },
      },
      grid: {
        color: '#e5e7eb', // Tailwind's gray-200
      },
      ticks: {
        color: '#4b5563', // Tailwind's gray-600
      },
    },
    y: {
      type: 'linear',
      title: {
        display: true,
        text: 'Y-Axis Label',
        color: '#1f2937', // Tailwind's gray-800
        font: { size: 14 },
      },
      grid: {
        color: '#e5e7eb', // Tailwind's gray-200
      },
      ticks: {
        color: '#4b5563', // Tailwind's gray-600
      },
    },
  },
};

// React Component
export default function ScatterChartComponent() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="h-96">
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
}