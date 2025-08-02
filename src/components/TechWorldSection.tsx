import React from 'react';
import { CheckCircle, Code, User, Dna, Calendar, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
interface TechWorldSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const TechWorldSection: React.FC<TechWorldSectionProps> = ({ scrollToSection }) => {


  return (
    <section className="py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - 3D Character and floating icons */}
          <div className="relative">
            {/* Morphing Blob Animation */}
            <div className="absolute inset-0 z-0">
              <div className="tech-world-blob"></div>
              <div className="hero-float"></div>
            </div>
            
            <div className="relative w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center z-20">
            
              <img 
                src="/lovable-uploads/20.webp" 
                alt="Tech World" 
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[610px] h-auto rounded-2xl mt-4 sm:mt-6 lg:mt-10" 
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 z-10">
            <div>
              <h3 className="inline-block text-sm  px-2 py-1 sm:px-2 sm:py-1 bg-[#E4D6FB]/80 rounded-full text-[#8A0C1E] font-medium sm: mb-10 sm:mb-4">BEST CHOICE</h3>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight font-title mb-6">
                Tech Change The World
              </h2>
            </div>
            
            <p className="text-blue-100 text-lg leading-relaxed">
              Our company provides a full range of services for the construction of private houses and cottages, as well as comprehensive digital solutions for modern businesses.
            </p>
    
            
            <Button 
              size="lg" 
              className="bg-white text-[#000d4a] hover:bg-[#000d4a]/80 hover:text-white px-8 py-4 text-lg shadow-elegant"
              onClick={() => scrollToSection('services')}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechWorldSection; 