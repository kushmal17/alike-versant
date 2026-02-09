import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-white tracking-wide">
        SpeakPro AI
      </h1>

      <div className="flex gap-6 text-zinc-300">
        <Link to="/" className="hover:text-white transition">
          Home
        </Link>
        <Link to="/dashboard" className="hover:text-white transition">
          Dashboard
        </Link>
        <Link to="/login" className="hover:text-white transition">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
