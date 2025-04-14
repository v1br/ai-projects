import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "./components/interfaces/sidebar";

export const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <div className="flex">
            <Sidebar currentPage={currentPath} setCurrentPage={handleNavigate} />
            <main className="flex-1 p-4">
                <Outlet />
            </main>
        </div>
    );
};
