"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Site Name */}
          <Link href="/" className="text-2xl font-bold text-teal-600">
            Acme Construction
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-teal-500 transition">Home</Link>
            <Link href="/about" className="hover:text-teal-500 transition">About</Link>
            <Link href="/services" className="hover:text-teal-500 transition">Services</Link>
            <Link href="/projects" className="hover:text-teal-500 transition">Projects</Link>
            <Link href="/contact" className="hover:text-teal-500 transition">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-teal-500 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-2">
          <Link href="/" className="block hover:text-teal-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-teal-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="block hover:text-teal-500" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/projects" className="block hover:text-teal-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="block hover:text-teal-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
