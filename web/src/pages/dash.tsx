import { HoverCard } from "../components/designs/hover-card";
import { CustomerTable } from "../components/interfaces/customer-table";
import { type Plot, type GridStyle } from "../types/pictoral";
import { Grid } from "../components/figures/grid";
import { d1 } from "../data/testing";

export const Dash = () => {

	const plots: Plot[] = [
		{
			label: "Customers",
			data: d1.map((row) => row.y),
			borderColor: "#ff6467",
			backgroundColor: "#ff6467",
			type: "bar",
			order: 1,
		}
	];

	const styles: GridStyle = {
		isHorizontal: true,
		className: "w-[96%] lg:max-w-xl h-56 p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out",
	};

	return (
		<div className="flex flex-col items-center justify-start w-full max-w-4xl h-full lg:px-6 py-8">
			<HoverCard override="w-[96%] lg:max-w-xl h-fit">Here you can view how many customers churn. 👇🏼</HoverCard>
			<Grid
				columns={["Will Churn", "Won't Churn"]}
				plots={plots}
				styles={styles}
			/>
			<HoverCard override="w-[96%] lg:max-w-xl h-fit">
				<CustomerTable />
			</HoverCard>
		</div>
	);
};
