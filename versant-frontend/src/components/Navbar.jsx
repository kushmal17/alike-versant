import profileImage from "../assets/profile.png";

const Navbar = () => {

  const handleClick = () => {
    window.open("https://bizzbuzzcreations.com/", "_blank");
  };

  return (
    <nav className="w-full bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      
      <div
        onClick={handleClick}
        className="cursor-pointer"
      >
        <img
          src={profileImage}
          alt="Profile"
          className="h-20 w-auto object-contain"
        />
      </div>

    </nav>
  );
};

export default Navbar;
