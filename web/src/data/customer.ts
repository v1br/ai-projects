export const personalFields = {
	radio: [
		{ 
			name: "gender", 
			label: "Gender", 
			enable: "Male",
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
			enable: "1", 
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
			enable: "1",
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
			enable: "1",
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


export const storeFields = {
	radio: [
		{ 
			name: "phoneService", 
			label: "Phone Service", 
			enable: "1",
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
			enable: "1",
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
			enable: "DSL",
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
			enable: "Yes",
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
			enable: "Yes",
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
			enable: "Yes",
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
			enable: "Yes",
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
			enable: "Yes",
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
			enable: "Yes",
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
			enable: "Yes",
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