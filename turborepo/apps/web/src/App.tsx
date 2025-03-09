import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chart } from "./pages/Chart";
import { Error } from "./pages/Error";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
