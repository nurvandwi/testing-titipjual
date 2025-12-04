import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Achievement from "./components/Achievement";
import Partnership from "./components/Partnership";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <Hero />
       
          <HowItWorks />
   
        <ScrollReveal delay={200} duration={900} origin="bottom">
          <WhyChooseUs />
        </ScrollReveal>
        <ScrollReveal delay={100} duration={900} origin="bottom">
          <Achievement />
        </ScrollReveal>
        <ScrollReveal delay={200} duration={900} origin="bottom">
          <Partnership />
        </ScrollReveal>
        <ScrollReveal delay={100} duration={900} origin="bottom">
          <FAQ />
        </ScrollReveal>
        <ScrollReveal delay={200} duration={900} origin="bottom">
          <CTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
