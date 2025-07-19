import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ExperienceSection from './ExperienceSection';
import TechWorldSection from './TechWorldSection';
import ServicesSection from './ServicesSection';
import ProfessionalServicesSection from './ProfessionalServicesSection';
import ProjectsSection from './ProjectsSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const TechSolutions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ExperienceSection />
      <TechWorldSection />
      <ServicesSection />
      <ProfessionalServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
};

export default TechSolutions;