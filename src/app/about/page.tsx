import Navbar from "@/components/layout/Navbar";
import About from "@/components/about/About";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F1F1F1]">
      <Navbar />

      <div className="pt-36">
        <About />
      </div>

      <Footer />
    </main>
  );
}