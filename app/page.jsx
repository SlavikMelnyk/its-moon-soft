"use client";

import { useState } from "react";
import Services from "../src/components/Services";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import AboutUs from "../src/components/AboutUs";
import Teams from "../src/components/Teams";
import Cta from "../src/components/Cta";
import Footer from "../src/components/Footer";
import ContactModal from "../src/components/ContactModal";
import { Analytics } from "@vercel/analytics/next";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-19 lg-pt[5.75rem] overflow-hidden">
      <Header onOpenModal={() => setModalOpen(true)} />
      <Hero />
      <Services />
      <AboutUs />
      <Teams />
      <Cta onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Analytics />
    </div>
  );
}
