import React from "react";

export const HoverCard = ({ children, hover, override }: { children: React.ReactNode, hover?: boolean, override?: string }) => {
	return (
		<div className={`m-2 p-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm ${hover? "hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out" : ""} ${override}`}>
			{children}
		</div>
	);
};
