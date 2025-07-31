import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      avatar: "/lovable-uploads/me.png",
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "Codexelis transformed our business with their innovative IT solutions. Their expertise in cloud computing and AI integration has given us a competitive edge."
    },
    {
      avatar: "/lovable-uploads/se.png",
      name: "Sarah Johnson",
      role: "CTO, InnovateTech",
      content: "The team at Codexelis delivered exceptional results. Their attention to detail and commitment to quality exceeded our expectations."
    },
    {
      avatar: "/lovable-uploads/arc.png",
      name: "Mike Davis",
      role: "Founder, StartupXYZ",
      content: "Working with Codexelis was a game-changer for our startup. They helped us build a robust foundation for our digital platform."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-title">
            ALL PROFESSIONAL TESTIMONIAL & FEEDBACK
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 shadow-card">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-30 h-10 rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full" />
                  </div>
                  <div className="flex text-yellow-500">
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
  );
};

export default TestimonialsSection; 