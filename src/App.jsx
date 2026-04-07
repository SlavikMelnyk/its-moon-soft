import { useState } from "react";
import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Teams from "./components/Teams";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ContactModal from "./components/ContactModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="pt-[4.75rem] lg-pt[5.75rem] overflow-hidden">
        <Header onOpenModal={() => setModalOpen(true)} />
        <Hero />
        <Services />
        <AboutUs />
        <Teams />
        <Cta onOpenModal={() => setModalOpen(true)} />
        <Footer />
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
}

export default App;
