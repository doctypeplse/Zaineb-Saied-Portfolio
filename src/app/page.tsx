import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen bg-[#F1F1F1]">
      <Navbar />

      <div className="relative">
        <div className="sticky top-0 z-0 h-screen">
          <Hero />
        </div>

        <div className="pointer-events-none relative z-10 -mt-[100vh] pt-[100vh]">
          <div className="pointer-events-auto">
            <Projects />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}