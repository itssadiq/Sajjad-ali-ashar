import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact | Fenwick",
  description: "Contact Fenwick",
};

export default function Contact() {
  return (
    <main className="w-full bg-[var(--black)] flex flex-col relative min-h-screen selection:bg-[var(--white)] selection:text-[var(--black)]">
      {/* Global Sticky Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-50 pointer-events-none">
        <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-6 sm:py-8 lg:py-12 pointer-events-auto">
          <Navbar />
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center pt-32 pb-24 px-4 sm:px-8">
        <h1 className="text-[80px] sm:text-[100px] lg:text-[140px] font-bold text-white tracking-[-0.04em] leading-none mb-12 sm:mb-16 text-center">
          Contact
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-white text-[16px] sm:text-[18px] font-medium mb-2">
            Interested in working together? <br className="block sm:hidden" /> Send me an email to
          </p>
          <a href="mailto:hello@fenwick.com" className="text-white text-[24px] sm:text-[32px] font-bold underline decoration-2 underline-offset-4 hover:text-gray-300 transition-colors">
            hello@fenwick.com
          </a>
        </div>

        {/* Form Container */}
        <div className="bg-[#111111] w-full max-w-[480px] rounded-[24px] p-8 sm:p-10 shadow-2xl">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#888888] text-[13px] font-medium ml-1">Name*</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Smith" 
                className="bg-[#1a1a1a] text-white px-5 py-4 rounded-xl outline-none focus:ring-1 focus:ring-white transition-all w-full placeholder:text-[#555] border border-transparent focus:border-[#333]"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#888888] text-[13px] font-medium ml-1">Email*</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@email.com" 
                className="bg-[#1a1a1a] text-white px-5 py-4 rounded-xl outline-none focus:ring-1 focus:ring-white transition-all w-full placeholder:text-[#555] border border-transparent focus:border-[#333]"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[#888888] text-[13px] font-medium ml-1">Message*</label>
              <textarea 
                id="message" 
                placeholder="Your message" 
                rows={4}
                className="bg-[#1a1a1a] text-white px-5 py-4 rounded-xl outline-none focus:ring-1 focus:ring-white transition-all w-full placeholder:text-[#555] border border-transparent focus:border-[#333] resize-y min-h-[140px]"
                required
              ></textarea>
            </div>

            <button 
              type="button" 
              className="w-full bg-[#1f1f1f] hover:bg-[#333] text-white font-semibold py-4 rounded-[16px] mt-2 transition-colors duration-200 text-[15px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="relative z-10 bg-[var(--white)] w-full flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.1)] mt-auto">
        <Footer />
      </div>
    </main>
  );
}
