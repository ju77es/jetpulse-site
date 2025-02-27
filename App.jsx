import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="bg-black text-gray-200 min-h-screen font-mono">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
