"use client";

import React from "react";

export default function AboutHero() {
  return (
    <section className="dark-bg bg-[var(--black)] text-[var(--white)] w-full flex justify-center selection:bg-[var(--white)] selection:text-[var(--black)] pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 lg:pb-32">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 flex flex-col">
        
        {/* Title */}
        <h1 className="display-title mb-16 sm:mb-24 lg:mb-32">
          About
        </h1>
        
        {/* Grid for content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Eyebrow */}
          <div className="lg:col-span-4">
            <span className="eyebrow-h6 text-[var(--white)]">
              AUTHOR BIO
            </span>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8 flex flex-col gap-10 sm:gap-12 lg:max-w-[720px]">
            <h2 className="heading-h2 text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-tight">
              Fenwick writes about how people think, change, and live with themselves
            </h2>
            
            <div className="flex flex-col gap-6 body-longform text-[#B5B5B5]">
              <p>
                Fenwick writes about how people think, change, and live with themselves. His work blends research and reflection, exploring the space between personal growth and ordinary life.
              </p>
              <p>
                Before turning to writing full-time, he worked in communication and design, experiences that shaped his interest in how language influences behavior.
              </p>
              <p>
                He lives in Copenhagen and is currently working on his forth book.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
