import React from 'react';
import { Calendar, Users, FolderKanban } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ExperienceSection: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      title: "15+ Years of Experience",
      description: "With over 15 years in the industry, we've built a reputation for excellence and reliability."
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "We've helped hundreds of businesses across various industries achieve their technology goals."
    },
    {
      icon: FolderKanban,
      title: "1000+ Projects",
      description: "Our portfolio includes a wide range of successful projects from small startups to enterprise solutions."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            We've Been Thinking It 15 Years
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{stat.title}</h3>
                <p className="text-muted-foreground">
                  {stat.description}
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