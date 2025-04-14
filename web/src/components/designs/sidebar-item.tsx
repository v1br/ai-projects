import { ReactNode } from "react";

export const SidebarItem = ({ label, icon, isActive, onClick }: { label: string, icon: ReactNode, isActive: boolean, onClick: () => void }) => {
	return (
		<li onClick={onClick} className={`flex flex-row items-center justify-start w-full px-8 py-4 gap-x-4 hover:bg-gray-200 border-l-4 ${isActive? "border-red-400" : "border-white"}`}>
			<span className={`${isActive? "text-red-400" : "text-gray-600"}`}>{icon}</span>
			<span className={`${isActive? "text-red-400" : "text-black"} text-sm font-sans font-semibold`}>{label}</span>
		</li>
	);
};
