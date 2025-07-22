import React from 'react';
import { Button } from './ui/button';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-[#8A0C1E] font-medium">
              TRUSTED IT & TECH SOLUTION FOR YOU
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight font-title">
              EMPOWERING SOLUTIONS WITH{' '}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                CODING EVOLUTION
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide cutting-edge IT solutions that transform businesses and drive innovation in the digital age.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-4 text-lg shadow-elegant"
              onClick={() => scrollToSection('services')}
            >
              Explore Our Services
            </Button>
          </div>
          <div className="relative">
            {/* Morphing Blob Animation */}
            <div className="absolute inset-0 z-0">
              <div className="hero-blob"></div>
              <div className="hero-float"></div>
            </div>
            
            {/* Main Hero Image */}
            <div className="relative z-20 flex justify-center">
              <img 
                src="/lovable-uploads/8378752a-a1ee-4b07-8757-b5b9aa51fa0f.webp" 
                alt="IT professionals collaborating with innovation" 
                className="w-full max-w-md h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 