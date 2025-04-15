import { SidebarItem } from "../designs/sidebar-item";
import { ChartPie, FilePlus, House } from "lucide-react";

export const Sidebar = ({
	currentPage, 
	setCurrentPage 
}: { 
	currentPage: string; 
	setCurrentPage: (path: string) => void;
}) => {

	return (
		<aside id="sidebar" className="hidden lg:block fixed left-0 top-0 w-[20%] h-full bg-white shadow-lg z-10">
			<SidebarItem isActive={currentPage === "/"} label="Home" icon={<House />} onClick={() => setCurrentPage("/")} />
			<SidebarItem isActive={currentPage === "/dash"} label="Dashboard" icon={<ChartPie />} onClick={() => setCurrentPage("/dash")} />
			<SidebarItem isActive={currentPage === "/add"} label="Add Customer" icon={<FilePlus />} onClick={() => setCurrentPage("/add")} />
		</aside>
	);
};
