"use client";

import { useState } from "react";
import Header from "../../src/components/Header";
import Services from "../../src/components/Services";
import Cta from "../../src/components/Cta";
import Footer from "../../src/components/Footer";
import ContactModal from "../../src/components/ContactModal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-19 lg-pt[5.75rem] overflow-hidden">
      <Header onOpenModal={() => setModalOpen(true)} />
      <Services />
      <Cta onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
