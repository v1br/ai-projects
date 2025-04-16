import { HoverCard } from "../components/designs/hover-card";
import { Link } from "react-router-dom";

export const Error = () => {
	return (
		<div className="flex flex-col items-center justify-start w-full max-w-4xl h-fit min-h-full lg:px-6 lg:py-8 space-y-6">
			<HoverCard override="w-[96%] lg:max-w-xl h-fit space-y-4">
				<h1 className="text-3xl font-medium text-gray-600">404 - Page Not Found 🕳️</h1>
				<p className="text-gray-600">
					Oops! Looks like you took a wrong turn.<br />
				</p>
				<p className="text-gray-500 text-sm">
					If you think this is a mistake, feel free to <a href="https://github.com/v1br/telco-churn/issues" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline hover:text-purple-800">report an issue</a>.
				</p>
				<Link to="/" className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
					Take Me Back Please
				</Link>
			</HoverCard>
		</div>
	);
};
