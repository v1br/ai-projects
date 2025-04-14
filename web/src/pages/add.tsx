import { CustomerForm } from "../components/interfaces/customer-form";

export const Add = () => {
	return (
		<div className="fixed right-0 top-0 w-3/4 h-screen overflow-y-scroll overflow-x-hidden border-2 border-red-600">
			<CustomerForm />
		</div>
	);
};
