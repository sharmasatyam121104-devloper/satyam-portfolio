import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Icons ke liye
import Logo from "./Logo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

const navLinks = [
  { name: "Home", to: "home" },
  { name: "Service", to: "services" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Blog", to: "blog" },
  { name: "Contact", to: "contact" },
];

  return (
    <header className="bg-black sticky top-0 z-50 border-b border-[#1f1f1f]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-20">
        
        {/* LOGO */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium text-[16px]">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="hover:text-[#FF014F] transition">
              {link.name}
            </Link>
          ))}
        </div>

        {/* BUTTONS & HAMBURGER */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-[#FF014F] text-white px-6 py-2 rounded-full hover:opacity-90 transition font-medium">
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`md:hidden bg-[#0f0f0f] border-b border-[#1f1f1f] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col p-6 gap-4 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-[#FF014F]"
              onClick={() => setIsOpen(false)} // close menu
              className="cursor-pointer hover:text-[#FF014F] transition"
            >
              {link.name}
            </Link>
          ))}

          <button className="bg-[#FF014F] text-white px-6 py-3 rounded-lg mt-2">
            Join Now
          </button>
        </div>
        </div>
    </header>
  );
};

export default NavBar;