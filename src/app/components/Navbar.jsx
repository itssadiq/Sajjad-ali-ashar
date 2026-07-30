"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path) => {
    const baseClass = "font-semibold text-[17px] transition-colors";
    if (pathname === path) {
      return `${baseClass} text-white underline decoration-[#f4a1cc] underline-offset-4 decoration-2`;
    }
    return `${baseClass} text-white hover:text-gray-300`;
  };

  return (
    <header className="w-full flex justify-end items-start z-50 h-10 relative">
      {/* Menu button */}
      <button
        type="button"
        aria-label="Toggle Navigation Menu"
        onClick={() => setIsMenuOpen(true)}
        className={`text-[var(--white)] bg-[#111] border border-[#333] hover:border-[var(--white)] rounded-full px-6 py-2.5 text-lg font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} block`}
      >
        Menu
      </button>

      {/* Menu Dropdown */}
      <div 
        className={`absolute top-0 right-0 bg-[#0a0a0a] border border-[#333333] rounded-2xl p-6 min-w-[240px] shadow-2xl flex flex-col z-50 transition-all duration-300 transform origin-top-right ${isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col gap-4 mt-1">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className={getLinkClass("/")}>Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className={getLinkClass("/about")}>About</Link>
            <Link href="/#books" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 font-semibold text-[17px]">Books</Link>
            <Link href="/#events" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 font-semibold text-[17px]">Events</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={getLinkClass("/contact")}>Contact</Link>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-300 font-bold text-[17px] tracking-wide cursor-pointer">Close</button>
        </div>
      </div>
    </header>
  );
}
