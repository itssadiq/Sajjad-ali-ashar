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
            className="bg-[var(--dark-text)] text-[var(--white)] hover:bg-[var(--black)] rounded-full px-8 py-4 font-semibold text-[16px] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black shrink-0"
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
                  className="group py-6 px-4 -mx-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b-2 border-gray-300 hover:border-gray-400 hover:bg-gray-100 rounded-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Left: Title */}
                  <div className="flex items-center gap-3">
                    <span className="body-longform text-[16px] sm:text-[18px] font-bold text-[var(--dark-text)] group-hover:translate-x-2 transition-transform duration-300">
                      {event.title}
                    </span>
                  </div>

                  {/* Right: Date & Time & Arrow */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-4 mt-2 sm:mt-0 group-hover:-translate-x-2 transition-transform duration-300">
                    <span className="body-longform text-[14px] sm:text-[16px] text-[var(--dark-text)] font-medium">
                      {event.date} &nbsp;/&nbsp; {event.time}
                    </span>
                    {/* Arrow indicator (desktop) */}
                    <svg
                      className="w-5 h-5 text-[var(--dark-text)] transition-transform duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 sm:block hidden"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {/* Mobile arrow indicator */}
                    <svg
                      className="w-5 h-5 text-[var(--dark-text)] sm:hidden block"
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
    </section>
  );
}
