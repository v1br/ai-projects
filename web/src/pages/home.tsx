import { useEffect } from "react";
import { ExternalLink, Laptop } from "lucide-react";
import { HoverCard } from "../components/designs/hover-card";
import { pingHandler } from "../api/ping-handler";

export const Home = () => {

	useEffect(() => {
		pingHandler();
	}, []);

	return (
		<div className="flex flex-col items-center justify-start w-full max-w-4xl h-fit min-h-full lg:px-6 lg:py-8 space-y-6">
			<h1 className="hidden lg:flex items-center text-3xl text-center text-gray-600 font-medium gap-4">
				Telco Customer Churn Predictor <Laptop size={32} className="text-purple-600" />
			</h1>

			<HoverCard override="w-[96%] lg:max-w-xl h-fit space-y-4">
				<p>
					This app allows telecom-companies to predict whether a customer will <em className="underline">churn</em> or <em className="underline">stay</em> based on their personal and service-related details.
				</p>
				<p>
					Users fill out a form, data is validated and sent to an ML model, and a prediction is returned. All predictions are stored and visualized on a dashboard for quick review. 🚀
				</p>
			</HoverCard>

			<HoverCard override="w-[96%] lg:max-w-xl h-fit space-y-4">
				<ul className="list-disc list-inside space-y-1 text-sm lg:text-base">
					<li className="flex items-center gap-2">
						<ExternalLink size={16} className="text-gray-700" />
						<a
							href="https://www.kaggle.com/datasets/blastchar/telco-customer-churn"
							target="_blank"
							rel="noopener noreferrer"
							className="underline text-blue-600 hover:text-blue-800 visited:text-purple-800"
						>
							Kaggle Dataset
						</a>
					</li>
					<li className="flex items-center gap-2">
						<img src="github.svg" alt="github-icon" className="w-[16px] h-[16px]" />
						<a
							href="https://github.com/v1br/telco-churn"
							target="_blank"
							rel="noopener noreferrer"
							className="underline text-gray-700 hover:text-black visited:text-purple-800"
						>
							Frontend Repository
						</a>
					</li>
					<li className="flex items-center gap-2">
						<img src="github.svg" alt="github-icon" className="w-[16px] h-[16px]" />
						<a
							href="https://github.com/AbhinnV04/Customer_Churn_Telco"
							target="_blank"
							rel="noopener noreferrer"
							className="underline text-gray-700 hover:text-black visited:text-purple-800"
						>
							Backend Repository
						</a>
					</li>
				</ul>
			</HoverCard>

			<HoverCard override="w-[96%] lg:max-w-xl h-fit space-y-4">
				<p className="text-sm lg:text-base">
					<span>This project is maintained by </span>
					<a
						href="https://github.com/v1br"
						target="_blank"
						rel="noopener noreferrer"
						className="underline text-blue-600 hover:text-blue-800"
					>
						Vibhor Agrawal
					</a>
					<span> and </span>
					<a
						href="https://github.com/AbhinnV04"
						target="_blank"
						rel="noopener noreferrer"
						className="underline text-blue-600 hover:text-blue-800"
					>
						Abhinn Verma
					</a>.
				</p>
				<p className="text-sm lg:text-base">
					<span>Tech Stack includes ReactJS, TailwindCSS, ChartJS, FastAPI, Numpy, Pandas and Scikit-learn. The project has been deployed on Vercel and Render!</span>
				</p>
			</HoverCard>

			<HoverCard override="block lg:hidden">
				<img src="anime.gif" alt="anime.gif" className="rounded-lg" />
			</HoverCard>
		</div>
	);
};
