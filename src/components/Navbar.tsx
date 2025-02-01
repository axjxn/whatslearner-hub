import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-whatsapp-dark">WhatsA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/courses" className="text-gray-700 hover:text-whatsapp-dark px-3 py-2 rounded-md">
              Courses
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-whatsapp-dark px-3 py-2 rounded-md">
              Categories
            </Link>
            <Link to="/teach" className="text-gray-700 hover:text-whatsapp-dark px-3 py-2 rounded-md">
              Teach
            </Link>
            <Button variant="default" className="bg-whatsapp-primary hover:bg-whatsapp-dark text-white">
              Sign In
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-whatsapp-dark focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/courses"
                className="text-gray-700 hover:text-whatsapp-dark block px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/categories"
                className="text-gray-700 hover:text-whatsapp-dark block px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/teach"
                className="text-gray-700 hover:text-whatsapp-dark block px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Teach
              </Link>
              <Button
                variant="default"
                className="w-full bg-whatsapp-primary hover:bg-whatsapp-dark text-white mt-2"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};