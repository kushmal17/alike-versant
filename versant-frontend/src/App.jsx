import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SpeakingTips from "./pages/SpeakingTips";
import SampleTest from "./pages/SampleTest";
import PartAIntro from "./pages/PartAIntro";
import PartA from "./pages/PartA";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/speaking-tips" element={<SpeakingTips />} />
        <Route path="/sample-test" element={<SampleTest />} />
        <Route path="/part-a-intro" element={<PartAIntro />} />
        <Route path="/part-a" element={<PartA />} />

      </Routes>
    </Router>
  );
}

export default App;
