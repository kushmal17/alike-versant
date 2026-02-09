import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">

      <div className="bg-zinc-900 p-10 rounded-2xl text-white text-center shadow-xl">

        <h2 className="text-3xl font-semibold mb-6">
          Welcome to Your Dashboard
        </h2>

        <p className="text-zinc-400 mb-8">
          Ready to begin your AI English speaking assessment?
        </p>

        <button
          onClick={() => navigate("/home")}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition"
        >
          Continue to Test Overview
        </button>

      </div>

    </div>
  );
};

export default Dashboard;
