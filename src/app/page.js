import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BookHighlightSection from "./components/BookHighlightSection";
import BooksShowcaseSection from "./components/BooksShowcaseSection";
import BlogsSection from "./components/BlogsSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[var(--bg-light)] flex flex-col">
      <HeroSection />
      <AboutSection />
      <BookHighlightSection />
      <BooksShowcaseSection />
      <BlogsSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
