import { useEffect } from "react";
import { CustomerForm } from "../components/interfaces/customer-form";
import { pingHandler } from "../api/ping-handler";

export const Add = () => {

	useEffect(() => {
		pingHandler();
	}, []);

	return (
		<div className="flex flex-col items-center justify-start w-full max-w-4xl h-fit min-h-full lg:px-6 lg:py-8">
			<CustomerForm />
		</div>
	);
};
