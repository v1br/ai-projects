import { ReactNode } from "react";

export const SidebarItem = ({ label, icon, isActive, onClick, disable }: { label: string, icon: ReactNode, isActive: boolean, onClick: () => void, disable?: boolean }) => {
	return (
		<li onClick={onClick} className={`flex flex-row items-center justify-start w-full px-8 py-4 gap-x-4 border-l-4 ${isActive? "border-purple-600" : "border-white"} ${disable? "cursor-not-allowed" : "hover:bg-gray-200"}`}>
			<span className={`${isActive? "text-purple-600" : "text-gray-600"}`}>{icon}</span>
			<span className={`${isActive? "text-purple-600" : "text-gray-600"} text-sm font-sans font-semibold`}>{label}</span>
		</li>
	);
};
