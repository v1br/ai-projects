import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CustomerSchema, type Customer, type Churn, type Form } from "../../types/churn";
import { postHandler } from "../../api/post-handler";
import { toDataPoint, saveDataPoint } from "../../helpers/local-store";
import { personalFields, serviceFields } from "../../helpers/form-structure";
import { Check, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";

export const CustomerForm = () => {

	const [activeSection, setActiveSection] = useState<"personal" | "service" | "preview">("personal");

	const [formData, setFormData] = useState<Form>({
		gender: "Male",
		seniorCitizen: "1",
		partner: "1",
		dependents: "1",
		tenure: 0,
		monthlyCharges: 0,
		totalCharges: 0,
		phoneService: "1",
		paperlessBilling: "1",
		multipleLines: "Yes",
		internetService: "DSL",
		contract: "Month-to-month",
		paymentMethod: "Electronic check",
		onlineSecurity: "Yes",
		onlineBackup: "Yes",
		deviceProtection: "Yes",
		techSupport: "Yes",
		streamingTV: "Yes",
		streamingMovies: "Yes",
	});
	
	const updateForm = <K extends keyof Form>(key: K, value: Form[K]) => {
		setFormData((prev) => ({ ...prev, [key]: value }));
	};  

	const handleNext = () => {
		if (activeSection === "personal") {
			setActiveSection("service");
		}
		else if (activeSection === "service") {
			setActiveSection("preview");
		}
	};
	
	const handlePrev = () => {
		if (activeSection === "preview") {
			setActiveSection("service");
		}
		else if (activeSection === "service") {
			setActiveSection("personal");
		}
	};

	const handleReset = () => {
		const confirmReset = window.confirm("Are you sure you want to reset the form? All entered data will be lost.");
		if (!confirmReset) return;

		toast.success("Form reset successfully 🫡");

		setFormData({
			gender: "Male",
			seniorCitizen: "1",
			partner: "1",
			dependents: "1",
			tenure: 0,
			monthlyCharges: 0,
			totalCharges: 0,
			phoneService: "1",
			paperlessBilling: "1",
			multipleLines: "Yes",
			internetService: "DSL",
			contract: "Month-to-month",
			paymentMethod: "Electronic check",
			onlineSecurity: "Yes",
			onlineBackup: "Yes",
			deviceProtection: "Yes",
			techSupport: "Yes",
			streamingTV: "Yes",
			streamingMovies: "Yes",
		});
		setActiveSection("personal");
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	
		// convert string "1" and "0" to integer counterparts here
		const parsedData: Record<string, unknown> = {
			...formData,
			seniorCitizen: Number(formData.seniorCitizen),
			partner: Number(formData.partner),
			dependents: Number(formData.dependents),
			phoneService: Number(formData.phoneService),
			paperlessBilling: Number(formData.paperlessBilling),
			tenure: Number(formData.tenure),
			monthlyCharges: Number(formData.monthlyCharges),
			totalCharges: Number(formData.totalCharges),
		};
	
		// perform form validation against zod schema
		const validation = CustomerSchema.safeParse(parsedData);
		if (!validation.success) {
			console.error("Validation failed ❌", validation.error.flatten());
			toast.error("Validation failed, unexpected inputs 🤷🏼‍♀️");
			return;
		}
		
		const data: Customer = validation.data;
		console.log("Validation succeeded ✔️", data);
		toast.success("Validation succeeded, sending data to model 💭");
	
		// send validated form inputs to backend for prediction
		try {
			const result = await postHandler<Customer, Churn>(data);
			if (result) {
				const prediction = result.churn_prediction;
				console.log("Prediction succeeded ✔️: ", result.churn_prediction);
				toast.success("Prediction succeeded, " + (result.churn_prediction? "customer WILL churn ⚠️" : "customer WONT churn 🥂"));
			
				// save the customer data point inside local storage
				const dataPoint = toDataPoint(formData, prediction);
				saveDataPoint(dataPoint);
			
			} else {
				toast.success("Prediction failed, model denied request 😥");
			}
		} catch (err) {
			console.error("Submission error ❌", err);
			toast.error("Submission error, server denied request 😥");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-[96%] lg:max-w-xl mx-2 lg:mx-4 my-2 p-4 bg-white rounded-xl shadow-sm border border-gray-200 text-sm"
		>

			{activeSection === "personal" && 
			<section id="personal">

				<h2 className="text-gray-700 text-lg underline">Personal Information</h2>

				{personalFields.radio.map(({ name, label, options }) => (
					<fieldset key={name} className="flex flex-row items-center justify-between w-full gap-8 my-6">
						
						<span className="font-medium text-xs text-gray-700 w-32">{label}</span>

						<div className="flex flex-row items-center justify-start lg:justify-between w-full lg:w-56 h-fit">
							{options.map(({choice, value}) => (
								<label key={choice} className="flex items-center w-32 gap-1 text-xs">
									<input
										type="radio"
										name={name}
										value={value}
										checked={formData[name as keyof Form] === value}
										onChange={(e) => updateForm(name as keyof Form, e.target.value)}
										className="accent-purple-600"
									/>
									{choice}
								</label>
							))}
						</div>

					</fieldset>
				))}

				<hr className="border border-gray-200" />

				{personalFields.number.map(({ name, label }) => (
					<fieldset key={name} className="flex flex-row items-center justify-between w-full gap-8 my-4">
						<label htmlFor={name} className="font-medium text-xs text-gray-700">
							{label}
						</label>
						<input
							type="number"
							id={name}
							name={name}
							min={0}
							value={formData[name as keyof Form]}
							onChange={(e) => updateForm(name as keyof Form, Number(e.target.value))}								
							step="0.01"
							className="border border-gray-300 w-56 px-2 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 hover:border-gray-400 transition"
						/>
					</fieldset>
				))}
			</section>
			}


			{activeSection === "service" && 
			<section id="service">

				<h2 className="text-gray-700 text-lg underline">Service Information</h2>

				{serviceFields.radio.map(({ name, label, options }) => (
					<fieldset key={name} className="flex flex-row items-center justify-between w-full gap-8 my-6">
						
						<span className="font-medium text-xs text-gray-700 w-32">{label}</span>

						<div className="flex flex-row items-center justify-start lg:justify-between w-full lg:w-56 h-fit">
							{options.map(({choice, value}) => (
								<label key={choice} className="flex items-center w-32 gap-1 text-xs">
									<input
										type="radio"
										name={name}
										value={value}
										checked={formData[name as keyof Form] === value}
										onChange={(e) => updateForm(name as keyof Form, e.target.value)}
										className="accent-purple-600"
									/>
									{choice}
								</label>
							))}
						</div>

					</fieldset>
				))}		

				<hr className="border border-gray-200" />

				{serviceFields.selector.map(({ name, label, options }) => (
					<div key={name} className="flex flex-row items-center justify-between w-full gap-8 my-4">
						<label htmlFor={name} className="text-xs text-gray-700 font-medium">
							{label}
						</label>
						<Listbox
							value={formData[name as keyof Customer] as string}
							onChange={(val) => updateForm(name as keyof Customer, val)}
						>
							<div className="relative w-56">
								<Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-1 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-600 hover:border-gray-400 sm:text-sm">
									<span className="block truncate">
										{
											options.find(
												({ value }) =>
													value === (formData[name as keyof Customer] as string)
											)?.choice
										}
									</span>
									<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
										<ChevronDown className="h-4 w-4 text-gray-400" />
									</span>
								</Listbox.Button>

								<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									{options.map(({ choice, value }) => (
										<Listbox.Option
											key={value}
											className={({ active }) =>
												`relative cursor-default select-none py-2 pl-10 pr-4 ${
													active ? "bg-purple-100 text-purple-900" : "text-gray-900"
												}`
											}
											value={value}
										>
											{({ selected }) => (
												<>
													<span
														className={`block truncate ${
															selected ? "font-medium" : "font-normal"
														}`}
													>
														{choice}
													</span>
													{selected && (
														<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
															<Check className="h-4 w-4" />
														</span>
													)}
												</>
											)}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</div>
						</Listbox>
					</div>
				))}
			</section>
			}

			{activeSection === "preview" && 
			<section id="preview">

				<h2 className="text-gray-700 text-lg underline mb-4">Preview Filled Details</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 my-4 text-sm text-gray-800">
					{Object.entries(formData).map(([key, value]) => (
						<div key={key} className="flex justify-between border-b border-gray-200 py-1">
							<span className="text-xs text-black capitalize">
								{key.replace(/([A-Z])/g, " $1")}
							</span>
							<span className="text-xs text-gray-600">{String(value)}</span>
						</div>
					))}
				</div>
			</section>
			}

			<hr className="border border-gray-200" />

			{/* Buttons */}
			<div className="flex justify-center gap-4 pt-3 mt-3">
				<button
					type="button"
					onClick={handlePrev}
					disabled={activeSection === "personal"}
					className={`w-1/3 px-4 py-1.5 rounded-md shadow-sm transition-all
					${activeSection === "personal"
			? "bg-gray-200 text-gray-400 cursor-not-allowed"
			: "bg-gray-100 text-black hover:bg-gray-200 hover:scale-105"}
					`}
				>
					Prev
				</button>

				<button
					type="button"
					onClick={handleReset}
					className="bg-gray-100 text-black w-1/3 px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-200 hover:scale-105 transition-all"
				>
					Reset
				</button>

				<button
					type="submit"
					className={`${activeSection === "preview" ? "block" : "hidden"} bg-purple-500 text-white w-1/3 px-4 py-1.5 rounded-md shadow-sm hover:bg-purple-600 hover:scale-105 transition-all`}
				>
					Submit
				</button>

				<button
					type="button"
					onClick={handleNext}
					disabled={activeSection === "preview"}
					className={`w-1/3 px-4 py-1.5 rounded-md shadow-sm transition-all
					${activeSection === "preview"
			? "hidden"
			: "bg-gray-100 text-black hover:bg-gray-200 hover:scale-105"}
					`}
				>
					Next
				</button>
			</div>
		</form>
	);
};
