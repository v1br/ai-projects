import { z } from "zod";


// TYPES REQUIRED FOR ZOD VALIDATION

const TCustomer = {

	// personal
	gender: z.enum(["Female", "Male"]),
	seniorCitizen: z.union([z.literal(0), z.literal(1)]),
	partner: z.union([z.literal(0), z.literal(1)]),
	dependents: z.union([z.literal(0), z.literal(1)]),
	tenure: z.number().nonnegative(),
	monthlyCharges: z.number().nonnegative(),
	totalCharges: z.number().nonnegative(),

	// store
	phoneService: z.union([z.literal(0), z.literal(1)]),
	paperlessBilling: z.union([z.literal(0), z.literal(1)]),
	multipleLines: z.enum(["Yes", "No", "No phone service"]),
	internetService: z.enum(["DSL", "Fiber optic", "No"]),
	contract: z.enum(["Month-to-month", "One year", "Two year"]),
	paymentMethod: z.enum([
		"Electronic check",
		"Mailed check",
		"Bank transfer (automatic)",
		"Credit card (automatic)",
	]),
	onlineSecurity: z.enum(["Yes", "No", "No internet service"]),
	onlineBackup: z.enum(["Yes", "No", "No internet service"]),
	deviceProtection: z.enum(["Yes", "No", "No internet service"]),
	techSupport: z.enum(["Yes", "No", "No internet service"]),
	streamingTV: z.enum(["Yes", "No", "No internet service"]),
	streamingMovies: z.enum(["Yes", "No", "No internet service"]),
};

export const CustomerSchema = z.object(TCustomer);
export type Customer = z.infer<typeof CustomerSchema>;
export type Churn = {
	churn_prediction: number;
};


// TYPES REQUIRED FOR FORM DATA HANDLING

export type Form = {

	// personal
	gender: string,
	seniorCitizen: string,
	partner: string,
	dependents: string,
	tenure: number,
	monthlyCharges: number,
	totalCharges: number,

	// store
	phoneService: string,
	paperlessBilling: string,
	multipleLines: string,
	internetService: string,
	contract: string,
	paymentMethod: string,
	onlineSecurity: string,
	onlineBackup: string,
	deviceProtection: string,
	techSupport: string,
	streamingTV: string,
	streamingMovies: string,
};


// TYPES REQUIRED FOR LOCAL STORAGE
export type DataPoint = {

	// identifier
	_id: string,

	// user information
	gender: string,
	seniorCitizen: number,
	partner: number,
	dependents: number,
	tenure: number,
	monthlyCharges: number,
	totalCharges: number,
	phoneService: number,
	paperlessBilling: number,
	multipleLines: string,
	internetService: string,
	contract: string,
	paymentMethod: string,
	onlineSecurity: string,
	onlineBackup: string,
	deviceProtection: string,
	techSupport: string,
	streamingTV: string,
	streamingMovies: string,

	// prediction
	prediction: number
};