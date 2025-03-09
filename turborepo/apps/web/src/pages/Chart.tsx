// import React from "react";
import { Bar } from "@repo/ui/charts/bar";
import { FrequencyDistribution } from "@repo/ui/types/tabular";

export const Chart = () => {
  const rawData: FrequencyDistribution[] = [
    { x: 2010, y: 10 },
    { x: 2011, y: 20 },
    { x: 2012, y: 15 },
    { x: 2013, y: 25 },
    { x: 2014, y: 22 },
    { x: 2015, y: 30 },
    { x: 2016, y: 28 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bar Chart Example</h1>
      <Bar
        label="My Bar Chart"
        xpref="Year "
        ysuff=" people"
        rawData={rawData}
        className="w-fit h-fit p-4 bg-white shadow-lg rounded-lg"
        borderWidth={2}
      />
    </div>
  );
};
