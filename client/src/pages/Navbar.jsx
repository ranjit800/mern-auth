import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg px-28">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Brand</h1>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className={`md:flex md:space-x-6 absolute md:static bg-blue-600 w-full md:w-auto left-0 p-4 md:p-0 ${isOpen ? "top-14" : "-top-96"} transition-all duration-300 md:flex-row flex flex-col items-center md:items-center`}>
          <li>
            <a href="#" className="text-white text-lg hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white text-lg hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white text-lg hover:text-gray-300">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
