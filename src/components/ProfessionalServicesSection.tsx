import React from 'react';
import { 
  Lightbulb, 
  Smartphone, 
  Shield, 
  Cloud, 
  BarChart3, 
  Settings 
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ProfessionalServicesSection: React.FC = () => {
  const services = [
    { 
      icon: Lightbulb, 
      title: "Web Development", 
      desc: "Modern, responsive websites built with cutting-edge technologies." 
    },
    { 
      icon: Smartphone, 
      title: "Mobile App Development", 
      desc: "Native and cross-platform mobile applications for iOS and Android." 
    },
    { 
      icon: Shield, 
      title: "Cybersecurity Services", 
      desc: "Comprehensive security solutions to protect your digital assets." 
    },
    { 
      icon: Cloud, 
      title: "Cloud Migration", 
      desc: "Seamless migration to cloud platforms with minimal downtime." 
    },
    { 
      icon: BarChart3, 
      title: "Business Intelligence", 
      desc: "Data-driven insights to make informed business decisions." 
    },
    { 
      icon: Settings, 
      title: "DevOps Solutions", 
      desc: "Streamline your development and deployment processes." 
    }
  ];

  return (
    <section className="py-20 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            All Professional Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
  );
};

export default ProfessionalServicesSection; 