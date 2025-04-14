import { z } from "zod";

const TCustomer = {
  gender: z.enum(["Female", "Male"]),
  seniorCitizen: z.union([z.literal(0), z.literal(1)]),
  partner: z.union([z.literal(0), z.literal(1)]),
  dependents: z.union([z.literal(0), z.literal(1)]),
  tenure: z.number().nonnegative(),
  phoneService: z.union([z.literal(0), z.literal(1)]),
  multipleLines: z.enum(["Yes", "No", "No phone service"]),
  internetService: z.enum(["DSL", "Fiber optic", "No"]),
  onlineSecurity: z.enum(["Yes", "No", "No internet service"]),
  onlineBackup: z.enum(["Yes", "No", "No internet service"]),
  deviceProtection: z.enum(["Yes", "No", "No internet service"]),
  techSupport: z.enum(["Yes", "No", "No internet service"]),
  streamingTV: z.enum(["Yes", "No", "No internet service"]),
  streamingMovies: z.enum(["Yes", "No", "No internet service"]),
  contract: z.enum(["Month-to-month", "One year", "Two year"]),
  paperlessBilling: z.union([z.literal(0), z.literal(1)]),
  paymentMethod: z.enum([
    "Electronic check",
    "Mailed check",
    "Bank transfer (automatic)",
    "Credit card (automatic)",
  ]),
  monthlyCharges: z.number().nonnegative(),
  totalCharges: z.number().nonnegative(),
};

export const CustomerSchema = z.object(TCustomer);
export type Customer = z.infer<typeof CustomerSchema>;
export type Churn = {
  churn_prediction: number;
};
