import React from "react";
import { CustomerSchema, type Customer, type Churn } from "../../types/churn";
import { postHandler } from "../../api/post-handler";

export const CustomerForm = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const rawData = Object.fromEntries(formData.entries());

		// Convert string numbers to actual numbers
		const parsedData: Record<string, unknown> = {
			...rawData,
			seniorCitizen: Number(rawData.seniorCitizen),
			partner: Number(rawData.partner),
			dependents: Number(rawData.dependents),
			phoneService: Number(rawData.phoneService),
			paperlessBilling: Number(rawData.paperlessBilling),
			tenure: Number(rawData.tenure),
			monthlyCharges: Number(rawData.monthlyCharges),
			totalCharges: Number(rawData.totalCharges),
		};

		const validation = CustomerSchema.safeParse(parsedData);

		if (!validation.success) {
			console.error("Validation failed ❌", validation.error.flatten());
			return;
		}

		const data: Customer = validation.data;
		console.log("Object ~> ", data);

		try {
			const result = await postHandler<Customer, Churn>(data);
			if (result) {
				console.log("Prediction succeeded ✔️: ", result.churn_prediction);
			} else {
				console.log("Prediction failed ❌");
			}
		} catch (err) {
			console.error("Submission error", err);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full p-6 space-y-8 bg-white"
		>

			{/* Gender */}
			<fieldset className="border border-gray-300 rounded-xl p-4">
				<legend className="font-semibold text-gray-700 mb-2">Gender</legend>
				<div className="flex gap-6">
					<label className="flex items-center gap-2">
						<input type="radio" name="gender" value="Male" defaultChecked />
						Male
					</label>
					<label className="flex items-center gap-2">
						<input type="radio" name="gender" value="Female" />
						Female
					</label>
				</div>
			</fieldset>

			{/* Yes/No Radio Groups */}
			{[
				{ name: "seniorCitizen", label: "Senior Citizen" },
				{ name: "partner", label: "Partner" },
				{ name: "dependents", label: "Dependents" },
				{ name: "phoneService", label: "Phone Service" },
				{ name: "paperlessBilling", label: "Paperless Billing" },
			].map(({ name, label }) => (
				<fieldset key={name} className="border border-gray-300 rounded-xl p-4">
					<legend className="font-semibold text-gray-700 mb-2">{label}</legend>
					<div className="flex gap-6">
						<label className="flex items-center gap-2">
							<input type="radio" name={name} value="1" defaultChecked />
							Yes
						</label>
						<label className="flex items-center gap-2">
							<input type="radio" name={name} value="0" />
							No
						</label>
					</div>
				</fieldset>
			))}

			{/* Number Fields */}
			{[
				{ id: "tenure", label: "Tenure (months)" },
				{ id: "monthlyCharges", label: "Monthly Charges" },
				{ id: "totalCharges", label: "Total Charges" },
			].map(({ id, label }) => (
				<div key={id} className="flex flex-col gap-1">
					<label htmlFor={id} className="font-semibold text-gray-700">
						{label}
					</label>
					<input
						type="number"
						id={id}
						name={id}
						min={0}
						defaultValue={0}
						step="0.01"
						className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
			))}

			{/* Selects */}
			{[
				{
					id: "multipleLines",
					label: "Multiple Lines",
					options: ["Yes", "No", "No phone service"],
				},
				{
					id: "internetService",
					label: "Internet Service",
					options: ["DSL", "Fiber optic", "No"],
				},
				{
					id: "contract",
					label: "Contract",
					options: ["Month-to-month", "One year", "Two year"],
				},
				{
					id: "paymentMethod",
					label: "Payment Method",
					options: [
						"Electronic check",
						"Mailed check",
						"Bank transfer (automatic)",
						"Credit card (automatic)",
					],
				},
			].map(({ id, label, options }) => (
				<div key={id} className="flex flex-col gap-1">
					<label htmlFor={id} className="font-semibold text-gray-700">
						{label}
					</label>
					<select
						id={id}
						name={id}
						className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						{options.map((opt) => (
							<option key={opt} value={opt}>
								{opt}
							</option>
						))}
					</select>
				</div>
			))}

			{/* Internet-related services */}
			{[
				{ id: "onlineSecurity", label: "Online Security" },
				{ id: "onlineBackup", label: "Online Backup" },
				{ id: "deviceProtection", label: "Device Protection" },
				{ id: "techSupport", label: "Tech Support" },
				{ id: "streamingTV", label: "Streaming TV" },
				{ id: "streamingMovies", label: "Streaming Movies" },
			].map(({ id, label }) => (
				<div key={id} className="flex flex-col gap-1">
					<label htmlFor={id} className="font-semibold text-gray-700">
						{label}
					</label>
					<select
						name={id}
						id={id}
						className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
						<option value="No internet service">No internet service</option>
					</select>
				</div>
			))}

			<div className="flex flex-row items-center justify-center gap-8">
				{/* Submit */}
				<div className="pt-4 text-center">
					<button
						type="submit"
						className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
					>
						Submit
					</button>
				</div>

				{/* Reset */}
				<div className="pt-4 text-center">
					<button
						type="reset"
						className="bg-gray-200 text-black px-6 py-2 rounded-lg shadow hover:bg-gray-400 transition"
					>
						Reset
					</button>
				</div>
			</div>
		</form>
	);
};
