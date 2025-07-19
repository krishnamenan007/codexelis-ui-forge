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
      title: "POS & Inventory Management System", 
      desc: "POS and inventory management solutions to streamline your business operations." 
    },
    { 
      image: "/lovable-uploads/7.png", 
      title: "AI powered analytics & Admin Dashboards", 
      desc: "Admin dashboards to manage your business operations and data." 
    },
    { 
      image: "/lovable-uploads/10.png", 
      title: "Database Management System ", 
      desc: "Database management solutions to manage your business data." 
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-title">
            SERVICES WE'RE OFFERING AS PRODUCTS
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