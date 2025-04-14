import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./layout";

// import pages
import { Add } from "./pages/add";
import { Code } from "./pages/code";
import { Dash } from "./pages/dash";
import { Data } from "./pages/data";
import { Error } from "./pages/error";
import { Home } from "./pages/home";
import { Test } from "./pages/test";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/add" element={<Add />} />
					<Route path="/code" element={<Code />} />
					<Route path="/dash" element={<Dash />} />
					<Route path="/data" element={<Data />} />
					<Route path="/test" element={<Test />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
