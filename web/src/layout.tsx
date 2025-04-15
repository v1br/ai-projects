import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/shared/navbar";
import { Sidebar } from "./components/shared/sidebar";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname;

	const handleNavigate = (path: string) => {
		navigate(path);
	};

	return (
		<>
			{/* Toaster */}
			<Toaster position="top-right" reverseOrder={false} />

			{/* Desktop Layout */}
			<div id="layout-desktop" className="hidden lg:block w-screen h-screen bg-gray-100">
				<Sidebar currentPage={currentPath} setCurrentPage={handleNavigate} />
				<main className="fixed right-0 top-0 w-3/4 h-full mb-8 overflow-y-auto bg-white shadow-lg">
					<Outlet />
				</main>
			</div>

			{/* Mobile & Tab Layout */}
			<div id="layout-mobile" className="flex lg:hidden flex-col w-screen h-screen bg-gray-100">
				<Navbar currentPage={currentPath} setCurrentPage={handleNavigate} />
				<main className="w-full h-full mt-4 overflow-y-auto bg-white shadow-md">
					<Outlet />
				</main>
			</div>
		</>
	);
};
