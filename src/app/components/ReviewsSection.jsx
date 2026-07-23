"use client";

import React, { useRef } from "react";

export default function ReviewsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const reviews = [
    {
      id: 1,
      text: `"Better Systems isn’t just theory. I’ve applied it at work and seen real results within weeks."`,
      name: "Emma Karlberg",
      platform: "LinkedIn",
      avatarBg: "bg-[#E6E6E6]",
    },
    {
      id: 2,
      text: `"The Clarity Habit showed me how small changes can make every morning productive."`,
      name: "David Larsson",
      platform: "Amazon Review",
      avatarBg: "bg-[#9BAFBA]",
    },
    {
      id: 3,
      text: `"Fenwick's methods helped me cut my workday stress in half. Simple, clear, effective."`,
      name: "Sofia Nilsson",
      platform: "Goodreads",
      avatarBg: "bg-[#E55B3C]",
    },
    {
      id: 4,
      text: `"A masterclass in deep focus. I finally have the practical tools I need to ignore distractions."`,
      name: "Marcus Berg",
      platform: "Twitter",
      avatarBg: "bg-[#378B4A]",
    },
  ];

  return (
    <section className="bg-[var(--black)] text-[var(--white)] w-full py-16 sm:py-24 lg:py-32 flex justify-center selection:bg-[var(--white)] selection:text-[var(--black)] overflow-hidden">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 flex flex-col gap-10 lg:gap-14">
        
        <h2 className="heading-h2 text-[38px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]">
          Reader reviews
        </h2>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="min-w-[280px] sm:min-w-[340px] lg:min-w-[380px] flex-shrink-0 snap-start border border-[#333333] rounded-md p-8 sm:p-10 flex flex-col justify-between gap-10 bg-[var(--black)] hover:border-[#555] transition-colors duration-300"
            >
              <div className="flex flex-col gap-6">
                {/* 5 Pink Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFB6C1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                
                <p className="body-longform text-[16px] sm:text-[18px] leading-[1.6] text-[var(--white)]">
                  {review.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Placeholder Avatar */}
                <div className={`w-12 h-12 rounded-full ${review.avatarBg} flex items-center justify-center text-black font-bold text-lg overflow-hidden relative`}>
                  {review.name.charAt(0)}
                  {/* Fake image texture */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,var(--black)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-[var(--white)]">
                    {review.name}
                  </span>
                  <span className="text-[14px] text-[var(--muted-gray)]">
                    {review.platform}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="w-full flex justify-end gap-3 mt-2">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-[#222222] hover:bg-[#333333] flex items-center justify-center text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-[#222222] hover:bg-[#333333] flex items-center justify-center text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>

      {/* Hide scrollbar globally for this component */}
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}
