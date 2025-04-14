import { SidebarItem } from "../designs/sidebar-item";
import { BookMarked, ChartPie, Database, FilePlus, House } from "lucide-react";


export const Sidebar = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (path: string) => void }) => {

	return (
		<div className="fixed left-0 top-0 w-[20%] h-full bg-white shadow-lg z-10">
			{/* <div className="flex flex-row items-center justify-start px-10 py-4 mb-4 border-b-4 border-gray-200">
            <span className="text-md font-medium font-sans">Telco-Churn Predictor</span>
        </div> */}
			<ol>
				<SidebarItem isActive={currentPage === "/"} label="Home" icon={<House />} onClick={() => setCurrentPage("/")} />
				<SidebarItem isActive={currentPage === "/dash"} label="Dashboard" icon={<ChartPie />} onClick={() => setCurrentPage("/dash")} />
				<SidebarItem isActive={currentPage === "/add"} label="Add Customer" icon={<FilePlus />} onClick={() => setCurrentPage("/add")} />
				<SidebarItem isActive={currentPage === "/data"} label="View Dataset" icon={<Database />} onClick={() => setCurrentPage("/data")} />
				<SidebarItem isActive={currentPage === "/code"} label="View Codebase" icon={<BookMarked />} onClick={() => setCurrentPage("/code")} />
			</ol>
		</div>
	);
};
