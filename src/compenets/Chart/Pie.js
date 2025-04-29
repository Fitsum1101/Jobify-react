import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie as PieChart } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows custom height
  plugins: {
    legend: {
      position: "right", // Places legend to the right, stacking vertically
      align: "center", // Aligns legend vertically (start, center, or end)
      labels: {
        color: "#1f2937", // Tailwind's gray-800
        font: {
          size: 14,
        },
        padding: 15, // Space between legend items
        boxWidth: 20, // Size of the color box
      },
    },
    tooltip: {
      backgroundColor: "#1f2937", // Tailwind's gray-800
      titleColor: "#ffffff", // Tailwind's white
      bodyColor: "#d1d5db", // Tailwind's gray-300
    },
  },
};

const Pie = () => {
  return (
    <div className="w-full h-80">
      <PieChart options={options} data={data} />;
    </div>
  );
};

export default Pie;
