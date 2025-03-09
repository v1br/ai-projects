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
      <h1 className="text-2xl font-semibold mb-4">Charts Testing</h1>

      {/* Desktop Chart */}
      <div className="hidden md:flex justify-center w-full">
        <Bar
          width="w-full"
          label="My Bar Chart"
          rawData={rawData}
          className="w-1/2 h-fit p-4 bg-white shadow-lg rounded-lg"
          borderWidth={2}
        />
      </div>

      {/* Mobile Chart */}
      <div className="flex md:hidden justify-center w-full">
        <Bar
          width="w-full"
          label="My Bar Chart"
          rawData={rawData}
          className="w-full h-fit p-2 m-4 bg-white shadow-lg rounded-lg"
          borderWidth={2}
        />
      </div>


    </div>
  );
};
