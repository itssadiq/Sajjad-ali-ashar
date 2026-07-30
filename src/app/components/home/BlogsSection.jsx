"use client";

import React from "react";

export default function BlogsSection() {
  const events = [
    {
      date: "October 5",
      time: "12:00 PM",
      title: "Focus and Productivity Workshop",
    },
    {
      date: "October 12",
      time: "5:30 PM",
      title: "Book Signing: The Clarity Habit",
    },
    {
      date: "October 20",
      time: "12:15 PM",
      title: "Better Systems Webinar",
    },
  ];

  return (
    <section className="bg-[var(--white)] text-[var(--black)] w-full py-16 sm:py-24 lg:py-32 flex justify-center selection:bg-[var(--black)] selection:text-[var(--white)]">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 flex flex-col gap-16 lg:gap-20">
        
        {/* Top Area: Title, Paragraph, Button */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 lg:gap-12">
          
          <div className="flex flex-col items-start gap-6 max-w-2xl">
            <h2 className="heading-h2 text-[38px] sm:text-[42px] lg:text-[48px] font-bold text-[var(--black)] tracking-[-0.02em] leading-[1.1]">
              Upcoming events
            </h2>
            <p className="body-longform text-[16px] sm:text-[18px] text-[var(--dark-text)] leading-[1.5] max-w-[600px]">
              “Join Alex’s newsletter for exclusive essays, early access to book releases, and practical tools you won’t find anywhere else.”
            </p>
          </div>

          <button
            type="button"
            className="btn-label-sm bg-[var(--black)] text-[var(--white)] hover:bg-[#333333] px-8 py-3.5 rounded-full font-semibold text-[14px] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 shrink-0"
          >
            All posts
          </button>
        </div>

        {/* Bottom Area: Events List */}
        <div className="w-full flex flex-col">
          
          {/* Eyebrow Label & Full Width Divider */}
          <span className="eyebrow-h6 text-[12px] sm:text-[13px] font-bold tracking-[0.04em] uppercase mb-4 text-[var(--black)]">
            UPCOMING EVENTS
          </span>
          <div className="w-full h-px bg-[#DCDCDC]"></div>

          {/* Grid Layout for the List */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 mt-2">
            
            {/* Empty Left Column on Desktop/Tablet */}
            <div className="hidden md:block md:col-span-5 lg:col-span-5"></div>
            
            {/* Events List on the Right */}
            <div className="md:col-span-7 lg:col-span-7 flex flex-col w-full">
              {events.map((event, idx) => (
                <div 
                  key={idx} 
                  className="w-full flex flex-col py-6 sm:py-8 border-b border-[#DCDCDC] group cursor-pointer"
                >
                  
                  {/* Date & Time */}
                  <span className="text-[14px] text-[var(--muted-gray)] font-medium mb-3 tracking-wide">
                    {event.date} &nbsp;/&nbsp; {event.time}
                  </span>
                  
                  {/* Title & Mobile Arrow */}
                  <div className="w-full flex items-center justify-between">
                    <h3 className="heading-h4 text-[22px] sm:text-[24px] lg:text-[26px] font-bold text-[var(--black)] tracking-[-0.01em] group-hover:text-blue-600 transition-colors duration-200">
                      {event.title}
                    </h3>
                    
                    {/* Arrow Icon (visible on mobile, or on hover for desktop) */}
                    <div className="text-[var(--black)] opacity-100 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
