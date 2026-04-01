import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import PhotoBreak from "@/components/PhotoBreak";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <PhotoBreak />
      <Stats />
      <Projects />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
