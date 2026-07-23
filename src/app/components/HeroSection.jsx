"use client";

import React from "react";

export default function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="dark-bg bg-[var(--black)] bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat text-[var(--white)] min-h-screen w-full relative selection:bg-white selection:text-black overflow-hidden flex justify-center">
      
      {/* Optional dark overlay if needed for text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-0"></div>

      {/* Centered, max-width constrained container with consistent padding */}
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-6 sm:py-8 lg:py-12 flex flex-col justify-between z-10 relative">
        
        {/* Top Header Row */}
        <header className="w-full flex justify-end items-start z-10 h-10">
          {/* Menu button */}
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            className="btn-label-sm text-[var(--white)] bg-transparent border border-[#333333] hover:border-[var(--white)] rounded-full px-5 py-2 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white block"
          >
            Menu
          </button>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-end lg:justify-between w-full mt-4 lg:mt-0">
          
          {/* Display Title */}
          <div className="w-full mb-10 lg:mb-0 lg:-mt-12">
            <h1 className="display-title text-[var(--white)] select-none tracking-[-0.06em] leading-[0.9]">
              <span className="block">Sajjad</span>
              <span className="block">Ali Ashar</span>
            </h1>
          </div>

          {/* Bottom Editorial Subtitle & Scroll Button */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-4 pb-2">
            {/* Subtitle text */}
            <h5 className="heading-h5 text-[var(--white)] max-w-xl text-[16px] sm:text-[18px] leading-[1.4] m-0">
              <span className="font-bold text-[var(--white)]">Author of </span>
              <span className="font-normal text-[var(--muted-gray)]">
                Deep Focus, Better Systems,
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="font-bold text-[var(--white)]">and </span>
              <span className="font-bold text-[var(--white)]">The Clarity Habit.</span>
            </h5>

            {/* Circular Down Arrow Button */}
            <button
              type="button"
              onClick={scrollToNextSection}
              aria-label="Scroll down to about section"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#333333] hover:border-[var(--white)] bg-transparent text-[var(--white)] flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white shrink-0 self-start md:self-end mt-2 md:mt-0"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
