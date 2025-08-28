"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Acme Construction</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 font-semibold text-gray-700">
          <li><a href="#home" className="hover:text-orange-500 transition">Home</a></li>
          <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
          <li><a href="#projects" className="hover:text-orange-500 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-2 font-semibold text-gray-700">
          <li><a href="#home" className="block hover:text-orange-500 transition">Home</a></li>
          <li><a href="#services" className="block hover:text-orange-500 transition">Services</a></li>
          <li><a href="#projects" className="block hover:text-orange-500 transition">Projects</a></li>
          <li><a href="#contact" className="block hover:text-orange-500 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
