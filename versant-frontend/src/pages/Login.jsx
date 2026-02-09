import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // Redirect to Home
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      <div className="bg-zinc-900 p-10 rounded-2xl shadow-xl w-full max-w-md border border-zinc-800">

        <h2 className="text-3xl text-white font-semibold mb-8 text-center">
          Get Started
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />

          <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-medium transition">
            Continue
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
