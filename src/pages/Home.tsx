import { useEffect } from "react";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import FlatlandIndex from "@/components/FlatlandIndex";
import Timing from "@/components/Timing";
import Culture from "@/components/Culture";
import Metaphor from "@/components/Metaphor";
import Reality from "@/components/Reality";
import Ethos from "@/components/Ethos";
import Mechanics from "@/components/Mechanics";
import Voices from "@/components/Voices";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

interface HomeProps {
  targetSection?: string;
}

export default function Home({ targetSection }: HomeProps) {
  // Scroll to target section when URL changes (e.g., /#/services → scroll to #services)
  useEffect(() => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetSection]);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-amber-400 selection:text-slate-900">
      <Hero />
      <Manifesto />
      <FlatlandIndex />
      <Timing />
      <Culture />
      <Metaphor />
      <Reality />
      <Ethos />
      <Mechanics />
      <Voices />
      <FAQ />
      <Footer />
    </div>
  );
}
