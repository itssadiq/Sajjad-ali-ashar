"use client";

import React, { useRef, useEffect, useState } from "react";

export default function ReviewsSection() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 340;
      const gap = 24; // gap-6
      const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isHovered) return;

    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached the end, snap back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    }, 4000); // Ticks every 4 seconds

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const originalReviews = [
    {
      id: 1,
      text: `"Better Systems isn’t just theory. I’ve applied it at work and seen real results within weeks."`,
      name: "Emma Karlberg",
      platform: "Linkedin",
      avatarBg: "bg-[#222]",
      avatarImg: "/avatar-emma.jpg"
    },
    {
      id: 2,
      text: `"The Clarity Habit showed me how small changes can make every morning productive."`,
      name: "David Larsson",
      platform: "Amazon Review",
      avatarBg: "bg-[#222]",
      avatarImg: "/avatar-david.jpg"
    },
    {
      id: 3,
      text: `"Fenwick's methods helped me cut my workday stress in half. Simple, clear, effective."`,
      name: "Sofia Nilsson",
      platform: "Goodreads",
      avatarBg: "bg-[#222]",
      avatarImg: "/avatar-sofia.jpg"
    },
    {
      id: 4,
      text: `"A masterclass in deep focus. I finally have the practical tools I need to ignore distractions."`,
      name: "Marcus Berg",
      platform: "Twitter",
      avatarBg: "bg-[#222]",
      avatarImg: "/avatar-marcus.jpg"
    }
  ];

  // Duplicate the reviews to ensure there are enough cards to scroll through
  const reviews = [...originalReviews, ...originalReviews, ...originalReviews];

  const StarFull = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFB6C1" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );

  const StarHalf = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#halfGrad)" stroke="#FFB6C1" strokeWidth="2" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="halfGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="50%" stopColor="#FFB6C1" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <section className="dark-bg bg-[var(--black)] text-[var(--white)] w-full py-16 sm:py-24 lg:py-32 flex justify-center selection:bg-[var(--white)] selection:text-[var(--black)] overflow-hidden">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 flex flex-col gap-12 lg:gap-16">
        
        <h2 className="heading-h2 text-[40px] sm:text-[48px] lg:text-[64px] font-bold tracking-[-0.02em] leading-[1.1]">
          Reader reviews
        </h2>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`} 
              className="w-[280px] sm:w-[320px] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)] flex-shrink-0 snap-start border border-[#333333] rounded-md p-8 sm:p-10 flex flex-col justify-between gap-12 min-h-[340px] bg-[var(--black)] hover:border-[#555] transition-colors duration-300"
            >
              <div className="flex flex-col gap-8">
                {/* 4.5 Pink Stars */}
                <div className="flex gap-1.5">
                  <StarFull />
                  <StarFull />
                  <StarFull />
                  <StarFull />
                  <StarHalf />
                </div>
                
                <p className="body-longform font-semibold text-[17px] sm:text-[19px] leading-[1.5] text-[var(--white)] tracking-tight">
                  {review.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Square Rounded Avatar */}
                <div 
                  className={`w-12 h-12 rounded-xl ${review.avatarBg} bg-cover bg-center flex items-center justify-center text-white font-bold overflow-hidden relative shadow-inner`}
                  style={{ backgroundImage: `url('${review.avatarImg}')` }}
                >
                  {/* Fallback Initial (visible if image fails/is absent) */}
                  <span className="opacity-30">{review.name.charAt(0)}</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[15px] sm:text-[16px] font-semibold text-[var(--white)] leading-tight">
                    {review.name}
                  </span>
                  <span className="text-[13px] sm:text-[14px] text-[#A0A0A0] mt-0.5">
                    {review.platform}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="w-full flex justify-end gap-3 mt-4">
          <button 
            onClick={() => scroll("left")}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#222222] hover:bg-[#333333] flex items-center justify-center text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white shrink-0"
            aria-label="Previous review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#222222] hover:bg-[#333333] flex items-center justify-center text-white transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white shrink-0"
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

