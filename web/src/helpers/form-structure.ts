export const personalFields = {
	radio: [
		{ 
			name: "gender", 
			label: "Gender", 
			options: [
				{
					choice: "Male",
					value: "Male",
				},
				{
					choice: "Female",
					value: "Female",
				},
			] 
		},
		{ 
			name: "seniorCitizen", 
			label: "Senior Citizen",
			options: [
				{
					choice: "Yes",
					value: "1",
				},
				{
					choice: "No",
					value: "0",
				},
			] 
		},
		{ 
			name: "partner", 
			label: "Partner", 
			options: [
				{
					choice: "Yes",
					value: "1",
				},
				{
					choice: "No",
					value: "0",
				},
			] 
		},
		{ 
			name: "dependents", 
			label: "Dependents", 
			options: [
				{
					choice: "Yes",
					value: "1",
				},
				{
					choice: "No",
					value: "0",
				},
			] 
		},
	],
    
	number: [
		{
			name: "tenure",
			label: "Tenure (months)"
		},
		{
			name: "monthlyCharges",
			label: "Monthly Charges"
		},
		{
			name: "totalCharges",
			label: "Total Charges"
		},
	]
};


export const serviceFields = {
	radio: [
		{ 
			name: "phoneService", 
			label: "Phone Service", 
			options: [
				{
					choice: "Yes",
					value: "1",
				},
				{
					choice: "No",
					value: "0",
				},
			] 
		},
		{ 
			name: "paperlessBilling", 
			label: "Paperless Billing", 
			options: [
				{
					choice: "Yes",
					value: "1",
				},
				{
					choice: "No",
					value: "0",
				},
			] 
		},
	],
	selector: [
		{ 
			name: "internetService", 
			label: "Internet Service", 
			options: [
				{
					choice: "DSL",
					value: "DSL",
				},
				{
					choice: "Fiber",
					value: "Fiber optic",
				},
				{
					choice: "No internet service",
					value: "No", // THIS IS CORRECT
				},
			] 
		},
		{ 
			name: "multipleLines", 
			label: "Multiple Lines", 
			options: [
				{
					choice: "Yes",
					value: "Yes",
				},
				{
					choice: "No",
					value: "No",
				},
				{
					choice: "No phone service",
					value: "No phone service",
				},
			] 
		},
		{ 
			name: "onlineSecurity", 
			label: "Online Security", 
			options: [
				{
					choice: "Yes",
					value: "Yes",
				},
				{
					choice: "No",
					value: "No",
				},
				{
					choice: "No internet service",
					value: "No internet service",
				},
			] 
		},
		{ 
			name: "onlineBackup", 
			label: "Online Backup", 
			options: [
				{
					choice: "Yes",
					value: "Yes",
				},
				{
					choice: "No",
					value: "No",
				},
				{
					choice: "No internet service",
					value: "No internet service",
				},
			] 
		},
		{ 
			name: "deviceProtection", 
			label: "Device Protection", 
			options: [
				{
					choice: "Yes",
					value: "Yes",
				},
				{
					choice: "No",
					value: "No",
				},
				{
					choice: "No internet service",
					value: "No internet service",
				},
			] 
		},
		{ 
			name: "techSupport", 
			label: "Tech Support", 
			options: [
				{
					choice: "Yes",
					value: "Yes",
				},
				{
					choice: "No",
					value: "No",
				},
				{
					choice: "No internet service",
					value: "No internet service",
				},
			] 
		},
		{ 
			name: "streamingTV", 
			label: "Streaming TV", 
			options: [
				{
					choice: "Yes",
					value: "Yes",
				},
				{
					choice: "No",
					value: "No",
				},
				{
					choice: "No internet service",
					value: "No internet service",
				},
			] 
		},
		{ 
			name: "streamingMovies", 
			label: "Streaming Movies", 
			options: [
				{
					choice: "Yes",
					value: "Yes",
				},
				{
					choice: "No",
					value: "No",
				},
				{
					choice: "No internet service",
					value: "No internet service",
				},
			] 
		},
	]
};