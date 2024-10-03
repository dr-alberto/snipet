import { Guide } from "./pages/Guide";
import { Home } from "./pages/Home";
import { Tool } from "./pages/Tool";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides/:tool" element={<Tool />} />
        <Route path="/guides/:tool/:guide" element={<Guide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
