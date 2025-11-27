import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="w-full flex items-center justify-between px-6 py-4 
      bg-white dark:bg-[#0f0f0f] text-black dark:text-white shadow-md 
      transition-all rounded-xl"
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 
        flex items-center justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text dark:text-blue-400">MR</p>
      </NavLink>

      {/* Navigation Menu */}
      <nav className="flex gap-6 text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 dark:text-blue-400"
              : "text-black dark:text-white hover:text-blue-400"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 dark:text-blue-400"
              : "text-black dark:text-white hover:text-blue-400"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 dark:text-blue-400"
              : "text-black dark:text-white hover:text-blue-400"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 dark:text-blue-400"
              : "text-black dark:text-white hover:text-blue-400"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
