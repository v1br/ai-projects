import { useState, useEffect } from "react";
import { type Plot, type GridStyle } from "../../types/pictoral";
import { type Frequency } from "../../types/tabular";
import { Grid } from "../designs/chart-grid";
import { getAllDataPoints } from "../../helpers/local-store";

export const CustomerChart = () => {

	// data points
	const [retained, setRetained] = useState<Frequency[]>([{x: 0, y: 0}]);
	const [mayChurn, setMayChurn] = useState<Frequency[]>([{x: 0, y: 0}]);

	useEffect(() => {
		const points = getAllDataPoints();
		const retainedCount = points.filter(p => p.prediction === 0).length;
		const churnCount = points.filter(p => p.prediction === 1).length;
	
		setRetained([{ x: 0, y: retainedCount }]);
		setMayChurn([{ x: 1, y: churnCount }]);
	}, []);


	// chart config
	const red = "#fb2c36";
	const green = "#00c951";
    
	const plots: Plot[] = [
		{
			label: "Retained",
			data: retained.map((row) => row.y),
			borderColor: green,
			backgroundColor: green,
			type: "bar",
			order: 1,
		},
		{
			label: "May Churn",
			data: mayChurn.map((row) => row.y),
			borderColor: red,
			backgroundColor: red,
			type: "bar",
			order: 1,
		}
	];

	const styles: GridStyle = {
		isHorizontal: true,
		className: "w-[96%] lg:max-w-xl h-56 p-4 bg-white border border-gray-300 rounded-lg shadow-sm",
	};

	return (
		<Grid
			columns={[""]}
			plots={plots}
			styles={styles}
		/>
	);
};