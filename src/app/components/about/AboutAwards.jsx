import React from "react";

export default function AboutAwards() {
  const awards = [
    {
      status: "Finalist / 2024",
      title: "Atlas Prize for Inspiring Nonfiction"
    },
    {
      status: "Recipient / 2023",
      title: "Nordic Mind Writing Grant"
    },
    {
      status: "Shortlisted / 2023",
      title: "Haven Prize"
    },
    {
      status: "Recipient / 2022",
      title: "Insight Prize for Reflective Literature"
    }
  ];

  return (
    <section className="dark-bg bg-[var(--black)] text-[var(--white)] w-full flex justify-center selection:bg-[var(--white)] selection:text-[var(--black)] pb-24 sm:pb-32 lg:pb-40">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32">
        
        {/* Left Column - Title */}
        <div className="md:w-1/3 shrink-0">
          <h2 className="heading-h2 text-[40px] sm:text-[48px] lg:text-[64px] font-bold tracking-[-0.02em] leading-[1.1]">
            Awards
          </h2>
        </div>

        {/* Right Column - Awards List */}
        <div className="md:w-2/3 flex flex-col">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className={`py-8 flex flex-col gap-2 border-[#222] ${index !== awards.length - 1 ? 'border-b' : ''} ${index === 0 ? 'pt-0 md:pt-2' : ''}`}
            >
              <span className="text-[#888888] text-[14px] font-medium tracking-wide">
                {award.status}
              </span>
              <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold tracking-tight text-[var(--white)]">
                {award.title}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
