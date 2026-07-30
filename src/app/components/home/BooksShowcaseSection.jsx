"use client";

import React from "react";

export default function BooksShowcaseSection() {
  const books = [
    {
      title: "Deep Focus",
      description: "Strategies to regain attention in a distracted world",
      badge: "Pre-order",
      // We will render a custom CSS placeholder based on this ID
      id: "deep-focus"
    },
    {
      title: "Better Systems",
      description: "Workflows that actually last",
      badge: null,
      id: "better-systems"
    },
    {
      title: "The Clarity Habit",
      description: "Daily routines for smarter decisions",
      badge: null,
      id: "clarity-habit"
    }
  ];

  // Helper to render the CSS-only book placeholders matching the designs
  const renderBookPlaceholder = (id) => {
    switch (id) {
      case "deep-focus":
        return (
          <div className="w-[50%] h-[70%] bg-[#404040] rounded-r-md rounded-l-[2px] shadow-2xl flex flex-col p-4 sm:p-5 relative border-l-4 border-[#2A2A2A] transform transition-transform hover:scale-105 duration-300">
            <span className="text-white font-semibold text-xs sm:text-sm tracking-tight leading-tight">Deep Focus</span>
            <span className="text-[#CFCFCF] text-[8px] sm:text-[10px] mt-0.5">From chaos to order</span>
            <div className="mt-4 flex-1 w-full bg-[#EAEAEA] relative overflow-hidden flex flex-col">
              <div className="w-5 h-5 bg-[#9BAFBA] absolute top-2 left-1/2 -translate-x-1/2"></div>
              <div className="w-3 h-3 bg-[#FF453A] rounded-full absolute bottom-8 left-2 z-10"></div>
              <div className="w-full h-[40%] bg-[#555555] absolute bottom-0 left-0"></div>
              {/* Noise texture */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle,var(--black)_1px,transparent_1px)] bg-[size:3px_3px]"></div>
            </div>
            <span className="text-white text-[6px] sm:text-[8px] text-right mt-3 font-medium">Alex Fenwick</span>
          </div>
        );
      case "better-systems":
        return (
          <div className="w-[50%] h-[70%] bg-[#F0EBE1] rounded-r-md rounded-l-[2px] shadow-2xl flex flex-col p-4 sm:p-5 relative border-l-4 border-[#DCD6C8] transform transition-transform hover:scale-105 duration-300">
            <span className="text-[#1A1A1A] font-semibold text-xs sm:text-sm tracking-tight leading-tight">Better Systems</span>
            <span className="text-[#666666] text-[8px] sm:text-[10px] mt-0.5">Workflows that last</span>
            <div className="mt-4 flex-1 w-full relative flex items-center justify-center">
              {/* 3x3 Grid pattern abstract art */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 relative z-10">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 bg-[#1A1A1A] rounded-full relative"></div>
                ))}
              </div>
              {/* Connecting lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-[#1A1A1A]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-1/2 bg-[#1A1A1A]"></div>
            </div>
            <span className="text-[#1A1A1A] text-[6px] sm:text-[8px] text-right mt-3 font-medium">Alex Fenwick</span>
          </div>
        );
      case "clarity-habit":
        return (
          <div className="w-[50%] h-[70%] bg-[#E8EFEA] rounded-r-md rounded-l-[2px] shadow-2xl flex flex-col p-4 sm:p-5 relative border-l-4 border-[#D0DCD3] transform transition-transform hover:scale-105 duration-300">
            <span className="text-[#1A1A1A] font-semibold text-xs sm:text-sm tracking-tight leading-tight">The Clarity Habit</span>
            <span className="text-[#666666] text-[8px] sm:text-[10px] mt-0.5">Small shifts, big results</span>
            <div className="mt-2 flex-1 w-full relative flex items-end justify-center overflow-hidden">
              {/* Abstract Line Art Representation */}
              <svg className="w-[120%] h-auto opacity-80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Person 1 (Blue) */}
                <path d="M20 100 C 20 60, 40 40, 30 20" stroke="#2541B2" strokeWidth="1.5" fill="none" />
                <path d="M15 45 C 25 45, 30 50, 40 40" stroke="#2541B2" strokeWidth="1.5" fill="none" />
                <circle cx="25" cy="35" r="4" stroke="#2541B2" strokeWidth="1.5" fill="none" />
                
                {/* Person 2 (Orange/Green) */}
                <path d="M80 100 C 80 50, 50 40, 70 20" stroke="#E55B3C" strokeWidth="1.5" fill="none" />
                <path d="M60 100 C 50 60, 60 50, 60 50" stroke="#378B4A" strokeWidth="1.5" fill="none" />
                <circle cx="65" cy="40" r="4" stroke="#E55B3C" strokeWidth="1.5" fill="none" />
                <path d="M61 40 L 69 40" stroke="#E55B3C" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <span className="text-[#1A1A1A] text-[6px] sm:text-[8px] text-right mt-1 font-medium">Alex Fenwick</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-[var(--white)] text-[var(--black)] w-full py-16 sm:py-24 lg:py-28 flex justify-center selection:bg-[var(--black)] selection:text-[var(--white)]">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 flex flex-col gap-10 lg:gap-14">
        
        {/* Section Title */}
        <h2 className="heading-h2 text-[38px] sm:text-[42px] lg:text-[48px] font-bold text-[var(--black)] tracking-[-0.02em] leading-[1.1]">
          Showcase of books
        </h2>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 w-full">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col gap-5 w-full cursor-pointer group">
              
              {/* Image Container */}
              <div className="bg-[#F2F2F2] w-full aspect-[4/5] rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden transition-colors duration-300 group-hover:bg-[#EAEAEA]">
                
                {/* Pre-order Badge */}
                {book.badge && (
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-[#212121] text-white text-[11px] sm:text-[12px] font-semibold px-3 py-1 sm:py-1.5 rounded-full z-20">
                    {book.badge}
                  </div>
                )}

                {/* CSS Placeholder rendering */}
                {renderBookPlaceholder(book.id)}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1.5 px-1">
                <h3 className="heading-h4 text-[20px] sm:text-[22px] font-bold text-[var(--black)] tracking-[-0.01em]">
                  {book.title}
                </h3>
                <p className="text-[var(--muted-gray)] text-[14px] sm:text-[15px] leading-snug">
                  {book.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
