import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "User";

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  },);

  return (
    <div className="w-full max-w-lg">
      <div className="bg-zinc-900 p-8 rounded-2xl text-white text-center shadow-2xl border border-zinc-800">

        <h2 className="text-2xl font-semibold mb-4">
          Hello {userName}, welcome to Alike-Versant
        </h2>

        <p className="text-zinc-400 mb-6">
          Ready to begin your AI English listening and, speaking assessment?
        </p>

        <button
          onClick={() => navigate("/home", { replace: true })}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full"
        >
          Continue
        </button>

      </div>
    </div>
  );
};

export default Dashboard;
