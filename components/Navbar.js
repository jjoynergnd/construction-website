"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Contact", "/contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow" aria-label="Main navigation">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-teal-700 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">Acme Construction <span className="sr-only">(fictional demonstration)</span></Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="rounded py-2 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">{label}</Link>)}
        </div>
        <button type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)} className="rounded px-3 py-2 text-2xl text-gray-800 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 md:hidden">
          <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>
      {isOpen && <div id="mobile-navigation" className="space-y-1 border-t border-gray-100 bg-white px-4 py-3 md:hidden">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setIsOpen(false)} className="block rounded px-3 py-2 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">{label}</Link>)}
      </div>}
    </nav>
  );
}
