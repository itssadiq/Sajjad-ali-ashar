"use client";

import React from "react";

// Pixel-perfect vector Logoipsum brand SVGs matching design screenshots
function LogoWave() {
  return (
    <div className="flex items-center gap-2.5 text-[#212121] opacity-75 hover:opacity-100 transition-opacity">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM16 7C20.97 7 25 11.03 25 16C21 16 18 13 14 13C10 13 7 16 7 16C7 11.03 11.03 7 16 7ZM7 19C9.5 19 12 17.5 15 17.5C18.5 17.5 21 20 25 20C24.3 22.9 22.2 24.8 19.5 25C15 25.3 12 21 7 19Z" fill="currentColor"/>
      </svg>
      <span className="font-bold text-[18px] tracking-tight">Logoipsum</span>
    </div>
  );
}

function LogoFlower() {
  return (
    <div className="flex items-center gap-2.5 text-[#212121] opacity-75 hover:opacity-100 transition-opacity">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C14.2 4 12.8 5.4 12.8 7.2C12.8 10.4 16 14 16 14C16 14 19.2 10.4 19.2 7.2C19.2 5.4 17.8 4 16 4ZM7.2 12.8C5.4 12.8 4 14.2 4 16C4 17.8 5.4 19.2 7.2 19.2C10.4 19.2 14 16 14 16C14 16 10.4 12.8 7.2 12.8ZM24.8 12.8C21.6 12.8 18 16 18 16C18 16 21.6 19.2 24.8 19.2C26.6 19.2 28 17.8 28 16C28 14.2 26.6 12.8 24.8 12.8ZM16 18C16 18 12.8 21.6 12.8 24.8C12.8 26.6 14.2 28 16 28C17.8 28 19.2 26.6 19.2 24.8C19.2 21.6 16 18 16 18Z" fill="currentColor"/>
      </svg>
      <span className="font-bold text-[18px] tracking-tight">Logoipsum</span>
    </div>
  );
}

function LogoSunburst() {
  return (
    <div className="flex items-center gap-2.5 text-[#212121] opacity-75 hover:opacity-100 transition-opacity">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="6" fill="currentColor"/>
        <path d="M16 2V6M16 26V30M2 16H6M26 16H30M6.1 6.1L8.9 8.9M23.1 23.1L25.9 25.9M6.1 25.9L8.9 23.1M23.1 8.9L25.9 6.1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <span className="font-bold text-[18px] tracking-tight">Logoipsum</span>
    </div>
  );
}

function LogoPower() {
  return (
    <div className="flex items-center gap-2.5 text-[#212121] opacity-75 hover:opacity-100 transition-opacity">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M17.5 7L10 17H16L14.5 25L22 15H16L17.5 7Z" fill="currentColor"/>
      </svg>
      <span className="font-bold text-[18px] tracking-tight">Logoipsum</span>
    </div>
  );
}

export default function AboutSection() {
  const books = [
    {
      title: "Deep Focus",
      badge: "Pre-order now",
      year: "2026",
    },
    {
      title: "Better Systems",
      badge: null,
      year: "2023",
    },
    {
      title: "The Clarity Habit",
      badge: null,
      year: "2020",
    },
  ];

  return (
    <section
      id="about"
      className="bg-(--white) text-(--dark-text) w-full min-h-screen selection:bg-(--black) selection:text-(--white) overflow-hidden flex justify-center"
    >
      <div className="w-full max-w-360 px-6 sm:px-12 lg:px-24 py-16 flex flex-col justify-between">
        {/* Top Layout Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-20 lg:mb-28">
          
          {/* Left Column: Eyebrow Tag */}
          <div className="lg:col-span-4 lg:col-start-1 pt-2">
            <span className="eyebrow-h6 text-(--dark-text) block font-bold text-[14px] tracking-[0.04em] uppercase">
              AUTHOR BIO
            </span>
          </div>

          {/* Right Column: Editorial Bio + About Author Button + Books */}
          {/* Using lg:col-start-6 to push it right, creating the large empty gap seen in the screenshot */}
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-12 lg:gap-16">
            
            {/* Main Editorial Bio Title */}
            <div className="flex flex-col items-start gap-8">
              <h3 className="heading-h3 leading-[1.15] text-(--black) tracking-[-0.02em]">
                Hello, I’m Sajjad Ali Ashar — author and <br className="hidden lg:block"/>
                psychologist. My mission is simple: <br className="hidden lg:block"/>
                give you practical tools to build a life <br className="hidden lg:block"/>
                aligned with your values and goals.
              </h3>

              <button
                type="button"
                className="btn-label-sm bg-(--dark-text) text-(--white) hover:bg-(--black) rounded-full px-6 py-3 font-semibold text-[14px] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
              >
                About author
              </button>
            </div>

            {/* Books List Section */}
            <div className="flex flex-col gap-8 pt-4 w-full">
              <h2 className="heading-h3 text-[28px] lg:text-[32px] font-bold text-(--black) tracking-[-0.02em]">
                Books
              </h2>

              <div className="flex flex-col w-full">
                {books.map((book, idx) => (
                  <div
                    key={idx}
                    className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#E6E6E6]"
                  >
                    {/* Left: Book Title & Pre-order Badge */}
                    <div className="flex items-center gap-3">
                      <span className="body-longform text-[16px] font-medium text-(--dark-text)">
                        {book.title}
                      </span>
                      {book.badge && (
                        <span className="bg-(--black) text-(--white) text-[12px] font-semibold px-3 py-1 rounded-full whitespace-nowrap leading-none pb-1.25 pt-1.5">
                          {book.badge}
                        </span>
                      )}
                    </div>

                    {/* Right: Year & Arrow (Arrow on mobile screens) */}
                    <div className="flex items-center justify-between w-full sm:w-auto gap-4 mt-2 sm:mt-0">
                      <span className="body-longform text-[16px] text-(--dark-text) font-medium">
                        {book.year}
                      </span>
                      {/* Mobile arrow indicator matching mobile screenshot */}
                      <svg
                        className="w-5 h-5 text-(--dark-text) sm:hidden block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M14 5l7 7m0 0l-7-7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Logos Bar (No top border to match the design) */}
        <div className="w-full pt-12 pb-6 mt-auto">
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12 lg:gap-16">
            <LogoWave />
            <LogoFlower />
            <LogoSunburst />
            <LogoPower />
          </div>
        </div>
      </div>
    </section>
  );
}
