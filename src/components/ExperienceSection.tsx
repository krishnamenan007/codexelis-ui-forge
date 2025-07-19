import React from 'react';
import { Target, ScrollText, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ExperienceSection: React.FC = () => {
  const sections = [
    {
      image: "/lovable-uploads/2.png",
      title: "Our Mission",
      description: "We do our best to make our working environment as comfortable as possible for our team and clients."
    },
    {
      image: "/lovable-uploads/3.png",
      title: "About History",
      description: "We do our best to make our working environment as comfortable as possible for our team and clients."
    },
    {
      image: "/lovable-uploads/4.png",
      title: "Our Vision",
      description: "We do our best to make our working environment as comfortable as possible for our team and clients."
    }
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">WHY US?</h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-title">
              We've Been Thriving In 38 Years
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-muted-foreground text-lg">
              We're a complete solutions to increase the level of professional results with everything with our digital solutions.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className="text-center p-8 border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center">
                  <img src={section.image} alt={section.title} className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
                <p className="text-muted-foreground">
                  {section.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 