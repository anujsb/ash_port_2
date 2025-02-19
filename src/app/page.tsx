import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
