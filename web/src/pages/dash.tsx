import { useEffect } from "react";
import { CustomerTable } from "../components/interfaces/customer-table";
import { CustomerChart } from "../components/interfaces/customer-chart";
import { pingHandler } from "../api/ping-handler";

export const Dash = () => {

	useEffect(() => {
		pingHandler();
	}, []);

	return (
		<div className="flex flex-col items-center justify-start w-full max-w-4xl h-fit min-h-full lg:px-6 lg:py-8">
			<CustomerChart />
			<CustomerTable />
		</div>
	);
};
