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
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
              TRUSTED IT & TECH SOLUTION FOR YOU
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Solutions with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Coding Evolution
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
          <div className="relative overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-20 right-16 w-24 h-24 bg-gradient-to-r from-accent/40 to-primary/40 rounded-full blur-lg animate-bounce delay-1000"></div>
              <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-secondary/35 to-accent/35 rounded-full blur-md animate-pulse delay-500"></div>
              <div className="absolute bottom-32 right-8 w-28 h-28 bg-gradient-to-r from-primary/25 to-secondary/25 rounded-full blur-xl animate-bounce delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl animate-pulse delay-1500"></div>
            </div>
            
            {/* Main Hero Image */}
            <div className="relative z-10 flex justify-center">
              <img 
                src="/lovable-uploads/8378752a-a1ee-4b07-8757-b5b9aa51fa0f.png" 
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