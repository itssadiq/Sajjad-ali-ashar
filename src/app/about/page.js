import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutGallery from "../components/about/AboutGallery";
import AboutAwards from "../components/about/AboutAwards";
import AboutDistribution from "../components/about/AboutDistribution";
import BooksShowcaseSection from "../components/home/BooksShowcaseSection";

export const metadata = {
  title: "About | Fenwick",
  description: "About Fenwick",
};

export default function About() {
  return (
    <main className="w-full bg-[var(--black)] flex flex-col relative min-h-screen">
      
      {/* Global Sticky Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-50 pointer-events-none">
        <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-6 sm:py-8 lg:py-12 pointer-events-auto">
          <Navbar />
        </div>
      </div>

      <div className="flex-grow">
        <AboutHero />
        <AboutGallery />
        <AboutAwards />
        <AboutDistribution />
        <BooksShowcaseSection />
      </div>

      <div className="relative z-10 bg-[var(--white)] w-full flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <Footer />
      </div>
    </main>
  );
}
