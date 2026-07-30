import React from "react";
import Image from "next/image";

export default function AboutDistribution() {
  return (
    <section className="bg-[var(--black)] text-[var(--white)] w-full flex justify-center selection:bg-[var(--white)] selection:text-[var(--black)] pb-24 sm:pb-32 lg:pb-40">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            
            {/* Upcoming events card */}
            <div className="bg-[#181818] rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col">
              <div className="w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] relative rounded-xl overflow-hidden mb-6 sm:mb-8 bg-[#222]">
                <img 
                  src="/hero.jpg" 
                  alt="Upcoming events" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold tracking-tight mb-3">
                Upcoming events
              </h3>
              <p className="text-[#a1a1a1] text-[15px] sm:text-[16px] leading-relaxed">
                Catch Alex at upcoming talks, readings, festivals, and workshops — new dates and locations are posted here as they're confirmed.
              </p>
            </div>

            {/* Logos card */}
            <div className="bg-[#181818] rounded-2xl p-6 lg:p-8 flex items-center justify-start overflow-hidden gap-12 sm:gap-16">
              {/* Fake logo 1 */}
              <div className="flex items-center gap-3 opacity-60">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26Z" fill="white"/>
                  <path d="M11 15C11 17.7614 13.2386 20 16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15Z" fill="white"/>
                </svg>
                <span className="font-bold text-[18px] tracking-tight text-white">Logoipsum</span>
              </div>
              {/* Fake logo 2 */}
              <div className="flex items-center gap-3 opacity-60">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM24.475 22.3537L22.3537 24.475L16 18.1213L9.64625 24.475L7.525 22.3537L13.8787 16L7.525 9.64625L9.64625 7.525L16 13.8787L22.3537 7.525L24.475 9.64625L18.1213 16L24.475 22.3537Z" fill="white"/>
                </svg>
                <span className="font-bold text-[18px] tracking-tight text-white">Logoipsum</span>
              </div>
            </div>
            
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            
            {/* Press kit card */}
            <div className="bg-[#181818] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-start flex-1">
              <div className="w-[100px] h-[100px] mb-12 sm:mb-16">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 20C20 8.95431 28.9543 0 40 0H60C71.0457 0 80 8.95431 80 20V80C80 91.0457 71.0457 100 60 100H40C28.9543 100 20 91.0457 20 80V20Z" fill="#ffb3e6" className="origin-center rotate-45 scale-[1.2]"/>
                  <path d="M10 30C10 18.9543 18.9543 10 30 10H70C81.0457 10 90 18.9543 90 30V70C90 81.0457 81.0457 90 70 90H30C18.9543 90 10 81.0457 10 70V30Z" fill="#ffb3e6"/>
                </svg>
              </div>
              
              <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold tracking-tight mb-3">
                Press kit
              </h3>
              <p className="text-[#a1a1a1] text-[15px] sm:text-[16px] leading-relaxed mb-8 flex-grow">
                Download the official press kit for author bio, portraits, and book materials.
              </p>
              
              <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-[15px] hover:bg-gray-200 transition-colors duration-200">
                Download
              </button>
            </div>

            {/* Agent contact card */}
            <div className="bg-[#181818] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-start flex-1">
              <div className="w-[100px] h-[100px] mb-12 sm:mb-16 rounded-3xl overflow-hidden bg-[#222]">
                {/* Fallback image */}
                <img 
                  src="/hero.jpg" 
                  alt="Agent" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold tracking-tight mb-3">
                Agent contact
              </h3>
              <p className="text-[#a1a1a1] text-[15px] sm:text-[16px] leading-relaxed mb-8 flex-grow">
                For rights, speaking engagements, or interview requests, please contact: <em className="text-white font-medium not-italic">Karin Madsen, North Coast Literary Agency</em>
              </p>
              
              <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-[15px] hover:bg-gray-200 transition-colors duration-200">
                Contact
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
