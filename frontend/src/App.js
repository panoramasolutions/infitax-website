import { useCallback } from "react";
import "@/App.css";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { TallySkills } from "@/components/TallySkills";
import { WhyUs } from "@/components/WhyUs";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

function App() {
  const navigate = useCallback((href) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="App bg-ivory">
      <Navbar onNavigate={navigate} />
      <main>
        <Hero onNavigate={navigate} />
        <TrustStrip />
        <Services onNavigate={navigate} />
        <TallySkills onNavigate={navigate} />
        <WhyUs />
        <FinalCTA onNavigate={navigate} />
        <Contact />
      </main>
      <Footer onNavigate={navigate} />
      <MobileCTA />
    </div>
  );
}

export default App;
