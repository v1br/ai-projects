import { useEffect, useState } from "react";
import { HoverCard } from "../designs/hover-card";
import { getAllDataPoints } from "../../helpers/local-store";
import type { DataPoint } from "../../types/churn";

export const CustomerTable = () => {
	const [data, setData] = useState<DataPoint[]>([]);

	useEffect(() => {
		const points = getAllDataPoints();
		setData(points);
	}, []);

	return (
		<HoverCard override="w-[96%] lg:max-w-xl h-fit">
			<div className="overflow-auto max-h-80">
				<table className="min-w-full border-collapse">
					<thead className="bg-gray-200 sticky top-0 z-10">
						<tr>
							<th className="border-b border-gray-300 px-4 py-2 text-left text-gray-700 text-xs lg:text-sm font-medium">#</th>
							<th className="border-b border-gray-300 px-4 py-2 text-left text-gray-700 text-xs lg:text-sm font-medium">Gender</th>
							<th className="border-b border-gray-300 px-4 py-2 text-left text-gray-700 text-xs lg:text-sm font-medium">Tenure</th>
							<th className="border-b border-gray-300 px-4 py-2 text-left text-gray-700 text-xs lg:text-sm font-medium">Charges</th>
							<th className="border-b border-gray-300 px-4 py-2 text-left text-gray-700 text-xs lg:text-sm font-medium">Prediction</th>
						</tr>
					</thead>
					<tbody>
						{data.length === 0 ? (
							<tr>
								<td colSpan={5} className="text-center py-4 text-gray-500">
									No customers found.
								</td>
							</tr>
						) : (
							data.map((d, i) => (
								<tr key={d._id} className="text-xs lg:text-sm hover:bg-gray-50 border-t border-gray-200">
									<td className="px-4 py-2">{i + 1}</td>
									<td className="px-4 py-2">{d.gender}</td>
									<td className="px-4 py-2">{d.tenure}</td>
									<td className="px-4 py-2">{d.monthlyCharges}</td>
									<td className="px-4 py-2 whitespace-nowrap min-w-[7rem]">
										<span
											className={`px-2 py-0.5 rounded text-white text-xs ${
												d.prediction ? "bg-[#6f6f96]" : "bg-[#9810fa]"
											}`}
										>
											{d.prediction ? "May Churn" : "Retained"}
										</span>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</HoverCard>
	);
};
