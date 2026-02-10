import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SpeakingTips from "./pages/SpeakingTips";
import Test from "./pages/Test";
import Result from "./pages/Result";

function AppWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      localStorage.removeItem("user");
      navigate("/", { replace: true });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  },);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <div className="grow flex justify-center items-center px-6 py-8">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/speaking-tips" element={<SpeakingTips />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
