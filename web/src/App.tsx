import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Test } from "./pages/Test";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<Test />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	);
};

export default App;
