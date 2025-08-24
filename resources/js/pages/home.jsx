import React, { useEffect, useState } from "react";
import Navbar from "@/components/navigation-bar";
import CarouselV2 from "@/components/header-largev2";
import AnnouncmentSection from "@/components/announcements-section";
import ScrollToTop from "@/components/scrolltotop";
import ConsultationSection from "@/components/booking-section";
import LearnNZSection from "@/components/aboutepath-section";
import AnimatedSection from "@/components/AnimatedSections";
import Modal from "../components/modal-component";

import Herodash from "@assets/Herodash.png";
import Herodash2 from "@assets/p2hero.png";
import Herovids from "@assets/animated.gif"

const images = [Herodash, Herodash2,Herovids];

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <CarouselV2 autoslide={true} autoslideInterval={4000}>
          {images.map((s, i) => (
            <img key={i} src={s} />
          ))}
        </CarouselV2>

        <AnimatedSection direction="left">
          <AnnouncmentSection />
        </AnimatedSection>

        <ScrollToTop />

        <AnimatedSection direction="right">
          <ConsultationSection />
        </AnimatedSection>

        <AnimatedSection direction="left">
          <LearnNZSection />
        </AnimatedSection>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>

    </>
  );
}
