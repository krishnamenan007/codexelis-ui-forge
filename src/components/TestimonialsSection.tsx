import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
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
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            All Professional Testimonial & Feedback
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  );
};

export default TestimonialsSection; 