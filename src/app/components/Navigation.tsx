import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Group from "../../imports/Group1";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/curriculum", label: "Our Curriculum" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/journey", label: "Our Journey" },
    { path: "/get-involved", label: "Get Involved" },
    { path: "/impact", label: "Impact" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-14 w-11 shrink-0">
              <Group />
            </div>
            <div>
              <div className="font-bold text-2xl text-[#111111]">UpliftEd</div>
              <div className="text-xs text-[#C0143C] font-medium">LET EVERY CHILD DREAM.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-[#C0143C]"
                    : "text-[#111111] hover:text-[#C0143C]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-[#C0143C] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#A01030] transition-colors shadow-sm"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-[#111111] hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium ${
                  isActive(link.path)
                    ? "bg-[#C0143C] text-white"
                    : "text-[#111111] hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="block bg-[#C0143C] text-white px-4 py-2.5 rounded-full font-medium text-center"
            >
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
