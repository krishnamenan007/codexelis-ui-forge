import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/056f2621-2e27-4234-b7c7-d3a8b7849fd7.png" 
              alt="Codexelis" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button></li>
            <li><button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Services</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">Projects</button></li>
            <li><button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">Testimonials</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button></li>
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleMenuClick('home')} className="text-left text-foreground hover:text-primary">Home</button>
              <button onClick={() => handleMenuClick('services')} className="text-left text-foreground hover:text-primary">Services</button>
              <button onClick={() => handleMenuClick('projects')} className="text-left text-foreground hover:text-primary">Projects</button>
              <button onClick={() => handleMenuClick('testimonials')} className="text-left text-foreground hover:text-primary">Testimonials</button>
              <button onClick={() => handleMenuClick('contact')} className="text-left text-foreground hover:text-primary">Contact</button>
              <Button className="w-full bg-gradient-primary text-primary-foreground">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 