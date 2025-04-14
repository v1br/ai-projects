import { useEffect, useRef, useMemo } from "react";
import Chart, { ChartData, ChartOptions } from "chart.js/auto";
import { GridInterface } from "../types/pictoral.js";

export const Grid = ({ columns, plots, styles }: GridInterface) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  // Chart data
  const data: ChartData<"bar" | "line"> = useMemo<ChartData<"bar" | "line">>(
    () => ({
      labels: columns,
      datasets: plots,
    }),
    [plots, columns],
  );

  // Chart options
  const options: ChartOptions<"bar" | "line"> = useMemo<
    ChartOptions<"bar" | "line">
  >(
    () => ({
      indexAxis: styles.isHorizontal ? "y" : "x",
      scales: {
        x: {
          title: {
            display: styles.xlabel ? true : false,
            text: styles.xlabel,
          },
        },
        y: {
          title: {
            display: styles.ylabel ? true : false,
            text: styles.ylabel,
          },
          ticks: {},
        },
      },
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
    }),
    [styles.xlabel, styles.ylabel, styles.isHorizontal],
  );

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
    <div className={styles.className}>
      <canvas ref={chartRef} />
    </div>
  );
};
