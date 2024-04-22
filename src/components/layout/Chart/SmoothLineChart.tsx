"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
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

const SmoothLineChart = () => {
  const data = {
    labels: ["January", "", "", "", "", "", "July"],
    datasets: [
      {
        label: "Data",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        cubicInterpolationMode: "monotone", // Smooth curve
        pointRadius: 0,
      },
    ],
  };
  const options = {
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          autoSkip: false,
          maxRotation: 0,
          pointRadius: 3,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line data={data as ChartData<"line">} options={options} />;
};

export default SmoothLineChart;
