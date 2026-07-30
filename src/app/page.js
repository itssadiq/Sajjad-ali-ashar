import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import BookHighlightSection from "./components/home/BookHighlightSection";
import BooksShowcaseSection from "./components/home/BooksShowcaseSection";
import BlogsSection from "./components/home/BlogsSection";
import ReviewsSection from "./components/home/ReviewsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[var(--black)] flex flex-col relative">
      <HeroSection />
      <div className="relative z-10 bg-[var(--white)] w-full flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <AboutSection />
        <BookHighlightSection />
        <BooksShowcaseSection />
        <BlogsSection />
        <ReviewsSection />
        <Footer />
      </div>
    </main>
  );
}
