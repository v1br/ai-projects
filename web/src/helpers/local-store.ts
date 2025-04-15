import { v4 as uuidv4 } from "uuid";
import { type Form, type DataPoint } from "../types/churn";
import toast from "react-hot-toast";

const storageKey = import.meta.env.VITE_LOCAL_KEY || "ChHURN_D@TA_P0INtSz";

/** Convert Form data to DataPoint and set a new _id */
export const toDataPoint = (form: Form, prediction: number): DataPoint => ({
	...form,
	seniorCitizen: Number(form.seniorCitizen),
	partner: Number(form.partner),
	dependents: Number(form.dependents),
	phoneService: Number(form.phoneService),
	paperlessBilling: Number(form.paperlessBilling),
	prediction,
	_id: uuidv4(),
});

/** Save a DataPoint to local storage (assumes _id is already set) */
export function saveDataPoint(dataPoint: DataPoint): void {
	try {
		const existing = getAllDataPoints();
		localStorage.setItem(storageKey, JSON.stringify([...existing, dataPoint]));
	} catch (err) {
		console.error("Error saving to local storage:", err);
	}
}

/** Retrieve all stored DataPoints from local storage */
export function getAllDataPoints(): DataPoint[] {
	try {
		const raw = localStorage.getItem(storageKey);
		return raw ? (JSON.parse(raw) as DataPoint[]) : [];
	} catch (err) {
		console.error("Error fetching from local storage:", err);
		return [];
	}
}

/** Delete a single DataPoint by _id */
export function deleteDataPointById(id: string): void {
	try {
		const existing = getAllDataPoints();
		const filtered = existing.filter(dp => dp._id !== id);
		localStorage.setItem(storageKey, JSON.stringify(filtered));
		toast.success("Customer deleted 🗑️");
	} catch (err) {
		console.error("Failed to delete customer", err);
		toast.error("Failed to delete customer 🤷🏼‍♀️");
	}
}

/** Clear all DataPoints from local storage */
export function clearAllDataPoints(): void {
	try {
		localStorage.removeItem(storageKey);
		toast.success("All customer data cleared 🧹");
	} catch (err) {
		console.error("Failed to clear local storage", err);
		toast.error("Failed to clear customer data 🤷🏼‍♀️");
	}
}
