import Navbar from "./components/Navbar";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import BookHighlightSection from "./components/BookHighlightSection";
import BooksShowcaseSection from "./components/home/BooksShowcaseSection";
import BlogsSection from "./components/home/BlogsSection";
import ReviewsSection from "./components/home/ReviewsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[var(--black)] flex flex-col relative">
      
      {/* Global Sticky Navbar - Positioned to exactly match HeroSection layout */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-50 pointer-events-none">
        <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-6 sm:py-8 lg:py-12 pointer-events-auto">
          <Navbar />
        </div>
      </div>

      <HeroSection />
      
      <div className="relative z-10 bg-[var(--white)] w-full flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <AboutSection />
        
        {/* Reusable Book Highlight Section */}
        <BookHighlightSection 
          heading={<>Coming soon: Deep <br className="hidden lg:block" /> Focus (2026)</>}
          text="In his newest book, Fenwick shows how simple routines can clear mental space, reduce overwhelm, and unlock better decisions every day."
          image="/hero.jpg"
          buttonText="Read more"
          buttonPath="#"
        />
        
        <BooksShowcaseSection />
        <BlogsSection />
        <ReviewsSection />
        <Footer />
      </div>
    </main>
  );
}
