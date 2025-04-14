import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import { Error } from "./pages/error.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
