"use client";

import React from "react";
import Link from "next/link";

export default function BookHighlightSection({ 
  heading, 
  text, 
  image, 
  buttonText = "Read more", 
  buttonPath = "#" 
}) {
  return (
    <section className="bg-[var(--white)] w-full py-12 sm:py-16 flex justify-center selection:bg-[var(--black)] selection:text-[var(--white)]">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="bg-[var(--black)] w-full px-8 sm:px-12 lg:px-20 py-12 lg:py-16 flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-6 overflow-hidden">
          
          {/* Left: Text Content */}
          <div className="flex flex-col justify-between w-full lg:w-[45%] order-2 lg:order-1 z-10 min-h-full">
            <div>
              <h2 className="heading-h2 !text-[var(--white)] leading-[1.05] tracking-tight text-[40px] sm:text-[48px] lg:text-[56px] xl:text-[64px]">
                {heading}
              </h2>
            </div>
            
            <div className="mt-16 lg:mt-auto flex flex-col items-start gap-6 lg:gap-8">
              <p className="text-[var(--white)] font-medium text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] max-w-[90%] whitespace-pre-line">
                {text}
              </p>
              <Link 
                href={buttonPath}
                className="bg-[var(--white)] text-[var(--black)] hover:bg-gray-200 px-7 py-3 rounded-full font-bold text-[14px] transition-colors duration-200 cursor-pointer inline-block"
              >
                {buttonText}
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="w-full lg:w-[52%] flex justify-center lg:justify-end order-1 lg:order-2 relative z-0 mt-8 lg:mt-0 items-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[580px] aspect-[5/4] flex items-center justify-center">
              
              {/* Image masked to the wavy cloud shape */}
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${image}')`,
                  maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 550 450' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='25' y='0' width='500' height='150' rx='75' fill='black' /%3E%3Crect x='25' y='135' width='500' height='150' rx='75' fill='black' /%3E%3Crect x='25' y='270' width='500' height='150' rx='75' fill='black' /%3E%3C/svg%3E")`,
                  WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 550 450' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='25' y='0' width='500' height='150' rx='75' fill='black' /%3E%3Crect x='25' y='135' width='500' height='150' rx='75' fill='black' /%3E%3Crect x='25' y='270' width='500' height='150' rx='75' fill='black' /%3E%3C/svg%3E")`,
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center"
                }}
              ></div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
