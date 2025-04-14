import React from "react";

// import types
import type { Plot, GridStyle } from "../types/pictoral";

// import components
import { Grid } from "../components/figures/grid";

// import data
import { d1, d2 } from "../data/testing";

export const Test = () => {
	const plots: Plot[] = [
		{
			label: "Bar",
			data: d1.map((row) => row.y),
			borderColor: "red",
			backgroundColor: "red",
			type: "bar",
			order: 1,
		},
		{
			label: "Line",
			data: d2.map((row) => row.y),
			borderColor: "blue",
			backgroundColor: "blue",
			type: "line",
			order: 0,
		},
	];

	const styles: GridStyle = {
		className:
			"w-full md:w-[500px] h-[300px] p-4 bg-white shadow-lg rounded-lg",
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-2xl font-semibold mb-4">Charts Testing</h1>

			{/* Desktop Chart */}
			<div className="hidden md:flex justify-center w-full h-[300px]">
				<Grid
					columns={["2010", "2011", "2012", "2013", "2014", "2015", "2016"]}
					plots={plots}
					styles={styles}
				/>
			</div>

			{/* Mobile Chart */}
			<div className="flex md:hidden justify-center w-full h-[300px]">
				<Grid
					columns={["2010", "2011", "2012", "2013", "2014", "2015", "2016"]}
					plots={plots}
					styles={styles}
				/>
			</div>
		</div>
	);
};
