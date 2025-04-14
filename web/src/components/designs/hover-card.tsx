import React from "react";

export const HoverCard = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-fit h-fit m-4 p-4 bg-white border border-gray-300 rounded-sm hover:shadow-sm hover:scale-[1.02] transition-all duration-300 ease-in-out">
			{children}
		</div>
	);
};
