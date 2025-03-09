import { useEffect, useRef, useMemo } from "react";
import Chart, { ChartData, ChartOptions } from "chart.js/auto";
import { BarProps } from "../../types/pictoral.js";

export const Bar = ({
  label,
  xlabel,
  xpref,
  xsuff,
  ylabel,
  ypref,
  ysuff,
  rawData,
  className,
  borderWidth,
}: BarProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  // Object selection

  // Chart data
  const data: ChartData<"bar"> = useMemo<ChartData<"bar">>(
    () => ({
      labels: rawData.map((row) => row.x),
      datasets: [
        {
          label: label,
          data: rawData.map((row) => row.y),
          // backgroundColor: ["red", "blue", "yellow", "green"],
          // borderColor: ["darkred", "darkblue", "goldenrod", "darkgreen"],
          borderWidth: borderWidth ? borderWidth : 0,
        },
      ],
    }),
    [borderWidth, label, rawData],
  );

  // Chart options
  const options: ChartOptions<"bar"> = useMemo<ChartOptions<"bar">>(
    () => ({
      scales: {
        x: {
          title: {
            display: xlabel ? true : false,
            text: xlabel,
          },
          ticks: {
            callback: function (value) {
              return (xpref ? xpref : "") + value + (xsuff ? xsuff : "");
            },
          },
        },
        y: {
          title: {
            display: ylabel ? true : false,
            text: ylabel,
          },
          ticks: {
            callback: function (value) {
              return (ypref ? ypref : "") + value + (ysuff ? ysuff : "");
            },
          },
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
    [xlabel, xpref, xsuff, ylabel, ypref, ysuff],
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
    <div className={className}>
      <canvas ref={chartRef} />
    </div>
  );
};
