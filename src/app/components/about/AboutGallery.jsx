"use client";

import React from "react";

export default function AboutGallery() {
  const images = [
    "/hero.jpg",
    "/hero.jpg",
    "/hero.jpg"
  ];

  return (
    <section className="bg-[var(--black)] w-full flex justify-center pb-16 sm:pb-24 lg:pb-32 px-6 sm:px-12 lg:px-24">
      <div className="w-full max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="w-full aspect-[4/3] bg-[#222] overflow-hidden relative"
            >
              {/* Fallback color/placeholder until actual images are added to public folder */}
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                  e.target.parentElement.innerHTML = `<span class="text-[#555] text-sm">Image ${index + 1}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
