"use client";

import React from "react";

export default function BookHighlightSection() {
  return (
    <section className="bg-[var(--black)] text-[var(--white)] w-full py-16 sm:py-24 lg:py-32 flex justify-center selection:bg-white selection:text-black">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Mobile/Tablet: Image appears on top. Desktop: Image is on the right. 
            We handle this by using flex-col-reverse on mobile/tablet, or just ordering.
            Actually, the design shows Image on TOP on Tablet/Mobile. 
            So we use flex-col for mobile, and lg:flex-row to put text on left, image on right. 
            Wait, if flex-col is used, the first item is on top. 
            In the desktop design, Text is on the LEFT (first), Image is on the RIGHT (second).
            So if we use flex-col-reverse on mobile, Image (second in DOM) goes to TOP.
            Let's use order classes to be explicit. */}
        
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start gap-6 max-w-xl order-2 lg:order-1">
          <h2 className="heading-h2 text-[38px] sm:text-[42px] lg:text-[48px] font-bold text-[var(--white)] tracking-[-0.02em] leading-[1.1]">
            Coming soon: Deep Focus (2026)
          </h2>
          <p className="body-longform text-[16px] sm:text-[18px] text-[var(--white)] leading-[1.6]">
            In his newest book, Fenwick shows how simple routines can clear mental space, reduce overwhelm, and unlock better decisions every day.
          </p>
          <button 
            type="button"
            className="mt-2 btn-label-large bg-[var(--white)] text-[var(--black)] hover:bg-[#E6E6E6] px-8 py-3.5 rounded-full font-semibold text-[16px] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Read more
          </button>
        </div>

        {/* Right: Book Image Area */}
        {/* We use a placeholder that visually mimics the grey curvy shape and the book cover */}
        <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative w-full max-w-[500px] aspect-square sm:aspect-[5/4] lg:aspect-[4/3] bg-[#D9D9D9] rounded-[40px] sm:rounded-[60px] flex items-center justify-center shadow-inner overflow-hidden">
            
            {/* Decorative wavy background elements to mimic the 3D shape */}
            <div className="absolute top-1/2 left-0 w-[120%] h-[120%] -translate-y-1/2 -translate-x-[10%] rounded-[100%] bg-[#CFCFCF] mix-blend-multiply opacity-40 blur-2xl"></div>

            {/* Placeholder Book Cover */}
            <div className="w-[60%] sm:w-[50%] lg:w-[55%] h-[80%] bg-[#212121] rounded-r-lg rounded-l-sm shadow-2xl flex flex-col p-6 sm:p-8 relative border-l-[6px] border-[#111111] z-10 transform transition-transform hover:scale-105 duration-500">
              <span className="text-[var(--white)] font-bold text-xl sm:text-2xl tracking-tight">Deep Focus</span>
              <span className="text-[#E6E6E6] text-sm sm:text-base mt-1">From chaos to order</span>
              
              {/* Abstract art inside book cover */}
              <div className="mt-8 flex-1 w-full bg-[#E6E6E6] relative p-4 overflow-hidden">
                <div className="w-8 h-8 bg-[#9BAFBA] absolute top-4 left-1/2 -translate-x-1/2"></div>
                <div className="w-5 h-5 bg-[#FF453A] rounded-full absolute bottom-10 left-4 z-10"></div>
                <div className="w-full h-[45%] bg-[#4A4A4A] absolute bottom-0 left-0"></div>
                {/* Texture overlay simulation */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,var(--black)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
              </div>
              
              <span className="text-[var(--white)] text-xs sm:text-sm text-right mt-6 font-medium">Alex Fenwick</span>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
