import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SpeakingTips from "./pages/SpeakingTips";
import Test from "./pages/Test";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Always first page */}
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/home" element={<Home />} />

        <Route path="/speaking-tips" element={<SpeakingTips />} />

        <Route path="/test" element={<Test />} />

        <Route path="/result" element={<Result />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
