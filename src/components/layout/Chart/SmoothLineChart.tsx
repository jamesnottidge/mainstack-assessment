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
import { useTransactionProvider } from "@/contexts/TransactionContext";
import { getDateArray } from "@/lib/utils";

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
  const { filteredTransactions } = useTransactionProvider();
  const transactionData = filteredTransactions.map((transaction: any) => {
    return transaction.amount;
  });
  const labels = getDateArray(filteredTransactions);
  const data = {
    labels: [...labels],
    datasets: [
      {
        label: "Data",
        data: [...transactionData],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#FF5403",
        cubicInterpolationMode: "monotone", // Smooth curve
        pointRadius: 0,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
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

  return (
    <Line
      data={data as ChartData<"line">}
      options={options}
      data-testid="chart-canvas"
    />
  );
};

export default SmoothLineChart;
