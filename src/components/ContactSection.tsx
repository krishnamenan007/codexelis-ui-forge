import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">CONTACT WITH US</h2>
          <h3 className="text-2xl lg:text-3xl mb-4">Contact Us</h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's Build Something Amazing Together</h3>
            <p className="text-primary-foreground/80">
              Whether you need a complete digital transformation or specific IT solutions, our team is ready to help you achieve your goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@codexelis.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-background/10 border border-primary/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-background/10 border border-primary/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 bg-background/10 border border-primary/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 bg-background/10 border border-primary/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 