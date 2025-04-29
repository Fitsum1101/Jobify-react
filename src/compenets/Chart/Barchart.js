import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

// Data for the Bar Chart
const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Number of Users",
      data: [65, 59, 80, 81, 56],
      backgroundColor: "#02B2AF", // Tailwind's blue-500
      borderColor: "#02B2AF", // Tailwind's blue-700
      borderWidth: 1,
    },
  ],
};

// Options for the Bar Chart
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#1f2937", // Tailwind's gray-800
        font: { size: 14 },
      },
    },
    tooltip: {
      backgroundColor: "#1f2937", // Tailwind's gray-800  #02B2AF
      titleColor: "#ffffff", // Tailwind's white
      bodyColor: "#d1d5db", // Tailwind's gray-300
    },
    title: {
      display: true,
      color: "#1f2937", // Tailwind's gray-800
      font: { size: 16 },
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
      ticks: {
        color: "#4b5563", // Tailwind's gray-600
      },
    },
    y: {
      grid: {
        color: "#e5e7eb", // Tailwind's gray-200
        display: false,
      },
      ticks: {
        color: "#4b5563", // Tailwind's gray-600
        beginAtZero: true, // Start y-axis at 0
      },
    },
  },
};

export default function BarChartComponent() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 ">
      <div className="h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
