import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Users, 
  FolderKanban, 
  Cloud, 
  Shield, 
  Bot, 
  Lightbulb,
  Code, 
  CloudUpload, 
  Smartphone, 
  BarChart3, 
  Settings,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import heroIllustration from '../assets/hero-illustration.png';

const TechSolutions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Codexelis</span>
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
                <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary">Services</button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-foreground hover:text-primary">Projects</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left text-foreground hover:text-primary">Testimonials</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary">Contact</button>
                <Button className="w-full bg-gradient-primary text-primary-foreground">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroIllustration} 
                alt="IT professionals working" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              We've Been Thinking It 15 Years
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">15+ Years of Experience</h3>
                <p className="text-muted-foreground">
                  With over 15 years in the industry, we've built a reputation for excellence and reliability.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">500+ Happy Clients</h3>
                <p className="text-muted-foreground">
                  We've helped hundreds of businesses across various industries achieve their technology goals.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                  <FolderKanban className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">1000+ Projects</h3>
                <p className="text-muted-foreground">
                  Our portfolio includes a wide range of successful projects from small startups to enterprise solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech World Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tech Change The World
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                <Cloud className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Cloud Computing</h3>
              <p className="text-muted-foreground">
                Leverage the power of cloud technology to scale your business and improve efficiency.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Cybersecurity</h3>
              <p className="text-muted-foreground">
                Protect your valuable data and systems with our advanced security solutions.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                <Bot className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">AI Solutions</h3>
              <p className="text-muted-foreground">
                Harness the power of artificial intelligence to drive innovation and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Services We're Offering as Provider
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "IT Consultation", desc: "Expert advice on digital transformation and technology strategy tailored to your business needs." },
              { icon: Code, title: "Software Development", desc: "Custom software solutions designed to meet your specific business requirements." },
              { icon: CloudUpload, title: "Cloud Solutions", desc: "Migrate, manage, and optimize your cloud infrastructure for maximum performance." },
              { icon: Smartphone, title: "Mobile Development", desc: "Create powerful mobile applications that engage users across all platforms." },
              { icon: BarChart3, title: "Data Analytics", desc: "Transform your data into actionable insights with our advanced analytics solutions." },
              { icon: Settings, title: "IT Support", desc: "24/7 technical support to ensure your systems run smoothly without interruption." }
            ].map((service, index) => (
              <Card key={index} className="p-6 border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Professional Services Section */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              All Professional Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Web Development", desc: "Modern, responsive websites built with cutting-edge technologies." },
              { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS and Android." },
              { icon: Shield, title: "Cybersecurity Services", desc: "Comprehensive security solutions to protect your digital assets." },
              { icon: Cloud, title: "Cloud Migration", desc: "Seamless migration to cloud platforms with minimal downtime." },
              { icon: BarChart3, title: "Business Intelligence", desc: "Data-driven insights to make informed business decisions." },
              { icon: Settings, title: "DevOps Solutions", desc: "Streamline your development and deployment processes." }
            ].map((service, index) => (
              <Card key={index} className="p-6 bg-card/10 border-primary/20 text-primary-foreground">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-primary-foreground/80">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              All Professional Testimonial & Feedback
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                avatar: "JD",
                name: "John Davidson",
                role: "CEO, FinTech Innovations",
                content: "TechSolutions transformed our business operations completely. Their cloud migration strategy saved us 40% in infrastructure costs while improving performance by 300%. The team's expertise and dedication are unmatched."
              },
              {
                avatar: "SK",
                name: "Sarah Kim",
                role: "Founder, HealthTech Pro",
                content: "Working with TechSolutions was a game-changer for our startup. They developed a custom mobile app that exceeded our expectations. Their agile approach and technical excellence helped us launch 2 months ahead of schedule."
              },
              {
                avatar: "MP",
                name: "Michael Peterson",
                role: "CTO, Global Retail Corp",
                content: "The cybersecurity audit and implementation by TechSolutions was thorough and professional. They identified vulnerabilities we didn't know existed and implemented robust solutions. Our data has never been more secure."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-card">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Codexelis</span>
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full shadow-elegant hover:opacity-90 transition-opacity z-50"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  );
};

export default TechSolutions;