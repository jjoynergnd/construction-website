"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-[#1DA1F2]">
          Acme Construction
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          {/* Each link points to a page */}
          <Link href="/" className="hover:text-[#1DA1F2]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#1DA1F2]">
            About
          </Link>
          <Link href="/services" className="hover:text-[#1DA1F2]">
            Services
          </Link>
          <Link href="/projects" className="hover:text-[#1DA1F2]">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-[#1DA1F2]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
