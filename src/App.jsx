import React from 'react';
import MinimalCursor from './components/ui/MinimalCursor';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Manifesto from './components/sections/Manifesto';
import Marquee from './components/sections/Marquee';
import Services from './components/sections/Services';
import Work from './components/sections/Work';
import Process from './components/sections/Process';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white overflow-x-hidden">
      <MinimalCursor />
      <Header />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Manifesto />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
