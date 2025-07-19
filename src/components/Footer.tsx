import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/056f2621-2e27-4234-b7c7-d3a8b7849fd7.png" 
                alt="Codexelis" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Your trusted partner in digital transformation. We deliver innovative IT solutions that drive business growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-primary transition-colors">Projects</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-muted-foreground hover:text-primary transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cloud Computing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Software Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">IT Consultation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Codexelis. All Rights Reserved. | Designed with{' '}
            <Heart className="inline w-4 h-4 text-red-500 fill-current" /> by Codexelis Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 