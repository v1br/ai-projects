import { useEffect, useRef } from "react";
import Chart, { ChartData, ChartOptions } from "chart.js/auto";

interface DataPoint {
  year: number;
  count: number;
}

interface BarProps {
  className?: string;
  rawData: DataPoint[];
  label: string;
  borderWidth?: number;
}

export const Bar = ({ className, rawData, label, borderWidth }: BarProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  // Chart data
  const data: ChartData<"bar"> = {
    labels: rawData.map(row => row.year),
    datasets: [
      {
        label: label,
        data: rawData.map(row => row.count),
        // backgroundColor: ["red", "blue", "yellow", "green"],
        // borderColor: ["darkred", "darkblue", "goldenrod", "darkgreen"],
        borderWidth: borderWidth? borderWidth : 0,
      },
    ],
  }

  // Chart options
  const options: ChartOptions<"bar"> = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "black",
          font: { size: 14 },
          boxWidth: 16,
          boxHeight: 8,
          usePointStyle: false,
          pointStyle: "circle",
        },
      },
    },
  };

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart before creating a new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create new Chart instance
    chartInstanceRef.current = new Chart(chartRef.current, {
      type: "bar",
      data,
      options,
    });

    // Cleanup when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, options]);

  return (
    <div className={className}>
      <canvas ref={chartRef} />
    </div>
  );
};
