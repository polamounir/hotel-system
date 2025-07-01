import { useState } from "react";
import { AlignJustify, CircleUser, X } from "lucide-react";
import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Room & Suites",
    link: "/ss",
  },
  {
    name: "Facilities",
    link: "/aa",
  },
  {
    name: "Contact",
    link: "/aa",
  },
  {
    name: "Events",
    link: "/aa",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 right-0 z-50 h-20 flex items-center justify-center bg-orange-50 dark:bg-gray-900">
      <div
        className="w-full px-4 py-4 sm:px-6 lg:px-8
              backdrop-blur-md bg-white/10 dark:bg-gray-800/30
              border border-white/20 dark:border-gray-700/20
               transition-all duration-300"
      >
        <div className="flex items-center justify-between max-w-[100rem] mx-auto">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-orange-600">LOGO</h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `text-base lg:text-lg font-medium transition-colors hover:text-orange-600  ${
                        isActive
                          ? "text-orange-600"
                          : "dark:text-gray-100  text-gray-800 "
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-500 transition-colors">
                Become a Guest
              </button>
            </div>

            <div className="flex gap-4">
              <ThemeToggle />
              <button className="p-2 text-gray-600 dark:text-white hover:text-orange-600 hover:bg-gray-100 rounded-full transition-colors">
                <CircleUser size={24} />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden gap-4 items-center">
            <ThemeToggle />
            <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-gray-100 rounded-full transition-colors">
              <CircleUser size={20} />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-orange-600 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <AlignJustify size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.link}>
                  <NavLink
                    to={link.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 text-lg font-medium transition-colors hover:text-orange-600 ${
                        isActive ? "text-orange-600" : "text-gray-700"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
              Become a Guest
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
