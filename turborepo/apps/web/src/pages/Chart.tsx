// import React from "react";
import { Bar } from "@repo/ui/charts/bar";

export const Chart = () => {

  const rawData = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bar Chart Example</h1>
      <Bar 
        className="w-fit h-fit p-4 bg-white shadow-lg rounded-lg"
        rawData={rawData}
        label="My Bar Chart"
        borderWidth={2}
      />
    </div>
  );
};