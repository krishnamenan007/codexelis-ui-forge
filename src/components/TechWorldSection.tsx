import React from 'react';
import { Cloud, Shield, Bot } from 'lucide-react';

const TechWorldSection: React.FC = () => {
  const techAreas = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Leverage the power of cloud technology to scale your business and improve efficiency."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your valuable data and systems with our advanced security solutions."
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Harness the power of artificial intelligence to drive innovation and automation."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-title">
            TECH CHANGE THE WORLD
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {techAreas.map((area, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                <area.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
              <p className="text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWorldSection; 