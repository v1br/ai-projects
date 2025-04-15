import { HoverCard } from "../components/designs/hover-card";
import { CustomerTable } from "../components/interfaces/customer-table";
import { CustomerChart } from "../components/interfaces/customer-chart";

export const Dash = () => {
	return (
		<div className="flex flex-col items-center justify-start w-full max-w-4xl h-fit min-h-full lg:px-6 py-8">
			<HoverCard override="w-[96%] lg:max-w-xl h-fit">Here you can view how many customers churn. 👇🏼</HoverCard>
			<CustomerChart />
			<CustomerTable />
		</div>
	);
};
