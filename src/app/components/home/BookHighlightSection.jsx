"use client";

import React from "react";

export default function BookHighlightSection() {
  return (
    <section className="bg-[var(--white)] w-full py-12 sm:py-16 flex justify-center selection:bg-[var(--black)] selection:text-[var(--white)]">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="bg-[var(--black)] w-full px-8 sm:px-12 lg:px-20 py-12 lg:py-16 flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-6 overflow-hidden">
          
          {/* Left: Text Content - Justify Between to push heading up and text/button down */}
          <div className="flex flex-col justify-between w-full lg:w-[45%] order-2 lg:order-1 z-10 min-h-full">
            <div>
              <h2 className="heading-h2 !text-[var(--white)] leading-[1.05] tracking-tight text-[40px] sm:text-[48px] lg:text-[56px] xl:text-[64px]">
                Coming soon: Deep <br className="hidden lg:block" /> Focus (2026)
              </h2>
            </div>
            
            <div className="mt-16 lg:mt-auto flex flex-col items-start gap-6 lg:gap-8">
              <p className="text-[var(--white)] font-medium text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] max-w-[90%]">
                In his newest book, Fenwick shows how simple routines can clear mental space, reduce overwhelm, and unlock better decisions every day.
              </p>
              <button 
                type="button"
                className="bg-[var(--white)] text-[var(--black)] hover:bg-gray-200 px-7 py-3 rounded-full font-bold text-[14px] transition-colors duration-200 cursor-pointer"
              >
                Read more
              </button>
            </div>
          </div>

          {/* Right: Book Visual */}
          <div className="w-full lg:w-[52%] flex justify-center lg:justify-end order-1 lg:order-2 relative z-0 mt-8 lg:mt-0 items-center">
            
            <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[580px] aspect-[5/4] flex items-center justify-center">
              
              {/* Wavy Cloud Background SVG - Precisely matched to the screenshot shape */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 w-full h-full">
                <svg viewBox="0 0 550 450" className="w-full h-full text-[#C8C8C8]" fill="currentColor" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  {/* 3 stacked pill shapes matching the screenshot's exact proportions */}
                  <rect x="25" y="0" width="500" height="150" rx="75" />
                  <rect x="25" y="135" width="500" height="150" rx="75" />
                  <rect x="25" y="270" width="500" height="150" rx="75" />
                  
                  {/* Subtle hard diagonal shadow behind the book (like in the screenshot) */}
                  <polygon points="300,150 550,350 550,450 200,450" fill="rgba(0,0,0,0.12)" />
                </svg>
              </div>

              {/* Book Cover (Using Background Image) */}
              <div 
                className="relative w-[260px] sm:w-[300px] lg:w-[350px] aspect-[1/1.45] bg-[#2E2E2E] bg-cover bg-center bg-no-repeat rounded-r-md rounded-l-[2px] transform -rotate-2 overflow-hidden"
                style={{
                  backgroundImage: "url('/book-cover-placeholder.jpg')", /* Replace with your actual book image path */
                  boxShadow: "25px 30px 40px -15px rgba(0, 0, 0, 0.8), 10px 10px 20px -5px rgba(0, 0, 0, 0.4)",
                  borderLeft: "10px solid #1A1A1A"
                }}
              >
                {/* Book spine indent shadow for 3D realism */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-black/40 z-10 pointer-events-none"></div>
                
                {/* Subtle highlight / glare on the left edge of the book */}
                <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-white/10 to-transparent z-10 pointer-events-none"></div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
