import type { ChartDataset, Point } from "chart.js/auto";

// GRID
export interface GridInterface {
	columns: string[];
	plots: Plot[];
	styles: GridStyle;
}

export interface GridStyle {
	className?: string;
	xlabel?: string;
	ylabel?: string;
	isHorizontal?: boolean;
}

// PLOT
export type Plot = ChartDataset<
	"bar" | "line",
	(number | [number, number] | Point | null)[]
>;
