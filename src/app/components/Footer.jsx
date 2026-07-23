"use client";

import React from "react";

export default function Footer() {
  const pagesLinks = ["About", "Books", "Events", "Contact"];
  const socialLinks = ["Instagram", "LinkedIn", "Facebook", "X (Twitter)"];

  return (
    <footer className="bg-[var(--black)] text-[var(--white)] w-full flex justify-center selection:bg-[var(--white)] selection:text-[var(--black)]">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 pt-20 sm:pt-28 pb-10 flex flex-col">
        
        {/* Top Area: Links & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-24">
          
          {/* Left: Link Columns */}
          <div className="flex flex-row gap-16 sm:gap-32 lg:gap-40">
            {/* Pages Column */}
            <div className="flex flex-col gap-6">
              <span className="text-[#A3A3A3] text-[15px] font-medium tracking-wide">Pages</span>
              <ul className="flex flex-col gap-5">
                {pagesLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[var(--white)] text-[16px] font-bold hover:text-[#A3A3A3] transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Column */}
            <div className="flex flex-col gap-6">
              <span className="text-[#A3A3A3] text-[15px] font-medium tracking-wide">Social</span>
              <ul className="flex flex-col gap-5">
                {socialLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[var(--white)] text-[16px] font-bold hover:text-[#A3A3A3] transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Newsletter Signup */}
          <div className="flex flex-col gap-6 w-full lg:w-auto lg:min-w-[400px]">
            <span className="text-[var(--white)] text-[18px] sm:text-[20px] font-bold tracking-tight">
              Get monthly newsletter
            </span>
            <form className="flex flex-row items-center gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full lg:w-[280px] bg-[#222222] text-white placeholder-[#888888] px-6 py-3.5 rounded-full outline-none focus:ring-1 focus:ring-white transition-all text-[15px]"
                required
              />
              <button 
                type="submit"
                className="bg-[var(--white)] text-[var(--black)] hover:bg-[#E6E6E6] px-8 py-3.5 rounded-full font-bold text-[15px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shrink-0"
              >
                Submit
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#333333] mb-8"></div>

        {/* Bottom Area: Copyright & Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <span className="text-[var(--white)] font-bold text-[14px] sm:text-[15px]">
            Website by Sanna Granqvist
          </span>
          <span className="text-[var(--white)] font-bold text-[14px] sm:text-[15px]">
            © 2026 2026 Alex Fenwick. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
