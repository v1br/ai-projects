import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";

const menuItems = [
	{ path: "/", label: "Home" },
	{ path: "/dash", label: "Dashboard" },
	{ path: "/add", label: "Add Customer" },
];

export const Navbar = ({
	currentPage,
	setCurrentPage,
}: {
	currentPage: string;
	setCurrentPage: (path: string) => void;
}) => {
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	// Close dropdown on outside click
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<nav className="relative w-full z-50">

			{/* Navigation Bar */}
			<div
				id="navbar"
				className="flex lg:hidden flex-row items-center justify-between w-full h-16 px-8 gap-4 bg-white shadow-md"
			>
				<span className="text-lg">telco-churn-predictor</span>
				<button onClick={() => setOpen(!open)}>
					<Menu className="w-6 h-6" />
				</button>
			</div>

			{/* Dropdown Menu */}
			{open && (
				<div
					ref={menuRef}
					className="absolute right-4 mt-2 w-48 bg-white rounded-lg shadow-md border border-gray-200"
				>
					<ul className="py-2">
						{menuItems.map(({ path, label }) => (
							<li
								key={path}
								onClick={() => {
									setCurrentPage(path);
									setOpen(false);
								}}
								className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
									currentPage === path ? "bg-gray-200 text-red-400 font-semibold" : ""
								}`}
							>
								{label}
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};
