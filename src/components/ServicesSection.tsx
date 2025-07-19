import React from 'react';
import { 
  Lightbulb, 
  Code, 
  CloudUpload, 
  Smartphone, 
  BarChart3, 
  Settings 
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ServicesSection: React.FC = () => {
  const services = [
    { 
      image: "/lovable-uploads/8.png", 
      title: "IT Consultation", 
      desc: "Expert advice on digital transformation and technology strategy tailored to your business needs." 
    },
    { 
      image: "/lovable-uploads/7.png", 
      title: "Software Development", 
      desc: "Custom software solutions designed to meet your specific business requirements." 
    },
    { 
      image: "/lovable-uploads/10.png", 
      title: "Cloud Solutions", 
      desc: "Migrate, manage, and optimize your cloud infrastructure for maximum performance." 
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Services We're Offering as Provider
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                  <img src={service.image} alt={service.title} className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 