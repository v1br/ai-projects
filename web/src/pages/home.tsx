import { HoverCard } from "../components/designs/hover-card";

export const Home = () => {
	return (
		<div className="fixed right-0 top-0 w-3/4 h-screen overflow-y-scroll overflow-x-hidden bg-white shadow-lg z-10">
			<HoverCard>
				This is the Home Page.
			</HoverCard>
		</div>
	);
};
